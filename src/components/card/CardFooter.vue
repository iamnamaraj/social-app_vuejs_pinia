<template>
    <footer class="flex justify-between border border-l-0 border-r-0 my-4 p-2">
      <button class="flex font-semibold gap-2" @click="handelLike" :class="isLiked ? 'text-blue-500' : 'text-black'"><ThumbsUp />Like({{ post.likes_count }})</button>
      <button class="flex font-semibold gap-2"><MessageSquareDot />Comment({{ post.comments_count }})</button>
      <button class="flex font-semibold gap-2"><Share2 />Share</button>
    </footer>
</template>

<script>
import { ThumbsUp, MessageSquareDot, Share2 } from 'lucide-vue-next';
import { usePostStore } from '../../stores/postStore';
import { computed } from 'vue';
import { useAuthStore } from '../../stores/authStore';

export default {
    props: [ 'post' ],
    components: { ThumbsUp, MessageSquareDot, Share2},

    setup(props){
        const { post } = props;
        const postStore = usePostStore();
        const authStore = useAuthStore();
        const currentUserId = authStore.user.id;

        const handelLike = async () =>{
            try {
                const response = await postStore.likeUnlike(post.id);
                console.log('API response:', response);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        }

        const isLiked = computed (()=>{
            return post.likes.some(like => like.user_id === currentUserId)
        })


       return { handelLike, isLiked }

    }



}
</script>

<style>

</style>