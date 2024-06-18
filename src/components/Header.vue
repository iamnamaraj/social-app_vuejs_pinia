<template>
<div>
    <div class="flex justify-between w-full  border-b-2 shadow-sm px-4 py-2 border-gray-300">
		<router-link to="/timeline"><img class="w-12 h-12" src="../assets/logo.svg" alt="" /></router-link>
        <div class="flex mt-3 gap-4">
            <router-link :to="{name: 'Settings'}"><Settings /></router-link >
            <button @click="logout"><LogOut /></button>
        </div>

    </div>
</div>

</template>

<script>
  import { Settings, LogOut } from 'lucide-vue-next';
export default {
    components: {Settings, LogOut},
    setup(){

        const logout = () =>{
            alert('Logout')
        }

        return { logout }

    }
}
</script>

<style>

</style>