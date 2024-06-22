<template>
   <div class="flex flex-col justify-center pt-4 pb-2 gap-2">
      <p>{{ post.caption }}</p>
      <img class="rounded-lg" :src="commonStore.mediaUrl + post.image" alt="post image" />
    </div>
</template>

<script>
import { useCommonStore } from '@/stores/commonStore';

export default {
    props: ['post'],
    setup (){
        const commonStore = useCommonStore()

        return { commonStore }
    }

}
</script>

<style>

</style>