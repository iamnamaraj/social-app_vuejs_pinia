<template>
    <div class="bg-gray-200 w-full md:w-[50%] flex flex-col mx-auto h-screen">
        <Header />
        <div>
            <router-view/>
        </div>
    </div>
</template>

<script>
import Header from '../../components/Header.vue'
export default {
    components: { Header}
}
</script>

<style>

</style>