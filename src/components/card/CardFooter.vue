<template>
    <footer class="flex justify-between border border-l-0 border-r-0 my-4 p-2">
      <button class="flex font-semibold gap-2"><ThumbsUp />Like</button>
      <button class="flex font-semibold gap-2"><MessageSquareDot />Comment</button>
      <button class="flex font-semibold gap-2"><Share2 />Share</button>
    </footer>
</template>

<script>
import { ThumbsUp, MessageSquareDot, Share2 } from 'lucide-vue-next';

export default {
    components: { ThumbsUp, MessageSquareDot, Share2}

}
</script>

<style>

</style>