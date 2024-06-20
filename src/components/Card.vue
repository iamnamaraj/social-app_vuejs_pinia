<template>
    <div class="flex flex-col  bg-white w-[90%] min-h-64 rounded-lg px-4 py-2">
        <div class="flex h-18 justify-start">
            <span class="flex justify-center items-center w-12 h-12 bg-gray-400 rounded-full text-white">HB</span>
            <div class="flex flex-col px-2 py-1">
                <span class="font-semibold">Namaraj Karki</span>
                <span class="text-gray-400 text-sm">2h ago</span>
            </div>
        </div>

        <div class="flex flex-col justify-center pt-4 pb-2 gap-2" >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, veniam minus aliquam, nisi quis tempore officia accusantium excepturi tempora incidunt quisquam eveniet reprehenderit necessitatibus rerum modi libero quo blanditiis aut.</p>
            <img  class="rounded-lg" src="./vue.jpg" alt="post image"/>
        </div>

        <footer class="flex justify-between border border-l-0 border-r-0 my-4 p-2">
            <button class="flex font-semibold gap-2"><ThumbsUp />Like</button>
            <button class="flex font-semibold gap-2"><MessageSquareDot />Comment</button>
            <button class="flex font-semibold gap-2"><Share2 />Share</button>
        </footer>

    </div>
</template>

<script>
  import { ThumbsUp, MessageSquareDot, Share2 } from 'lucide-vue-next';

export default {
    components: { ThumbsUp, MessageSquareDot, Share2 }

}
</script>

<style>

</style>