<template>
  <div class="flex flex-col bg-white w-[90%] min-h-64 rounded-lg px-4 py-2">
    <div class="flex h-18 justify-start">
      <span class="flex justify-center items-center w-12 h-12 bg-gray-400 rounded-full text-white">{{ initials }}</span>
      <div class="flex flex-col px-2 py-1">
        <span class="font-semibold">{{ post.user.first_name }} {{post.user.last_name}}</span>
        <span class="text-gray-400 text-sm">{{  formattedTime }}</span>
      </div>
    </div>

    <div class="flex flex-col justify-center pt-4 pb-2 gap-2">
      <p>{{ post.caption }}</p>
      <img class="rounded-lg" :src="commonStore.mediaUrl + post.image" alt="post image" />
    </div>

    <footer class="flex justify-between border border-l-0 border-r-0 my-4 p-2">
      <button class="flex font-semibold gap-2"><ThumbsUp />Like</button>
      <button class="flex font-semibold gap-2"><MessageSquareDot />Comment</button>
      <button class="flex font-semibold gap-2"><Share2 />Share</button>
    </footer>
  </div>
</template>

<script>
import { computed } from 'vue';
import { ThumbsUp, MessageSquareDot, Share2 } from 'lucide-vue-next';
import { useCommonStore } from '../stores/commonStore';
import { formatDate } from '../composables/moment'

export default {
  props: [ 'post'],
  components: { ThumbsUp, MessageSquareDot, Share2 },
    setup(props) {
        const commonStore = useCommonStore()
        const initials = computed(() => {
            const firstName = props.post.user.first_name || '';
            const lastName = props.post.user.last_name || '';
            const firstLetterFirstName = firstName.charAt(0).toUpperCase();
            const lastLetterLastName = lastName.charAt(0).toUpperCase();
            return `${firstLetterFirstName}${lastLetterLastName}`;
        });

        const formattedTime = computed(() => {
            return formatDate(props.post.created_at);
        });

        return { initials, formattedTime, commonStore };
    }

};
</script>

<style>
/* Your styles here */
</style>
