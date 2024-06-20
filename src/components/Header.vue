<template>
<div>
    <div class="flex justify-between w-full  border-b-2 shadow-sm px-4 py-2 border-gray-300">
		<router-link to="/timeline"><img class="w-12 h-12" src="../assets/logo.svg" alt="" /></router-link>
        <div class="flex mt-3 gap-4">
            <router-link :to="{name: 'Settings'}"><Settings /></router-link >
            <button @click="logout" class="active:bg-gray-200"><LogOut /></button>
        </div>

    </div>
</div>

</template>

<script>
  import { Settings, LogOut } from 'lucide-vue-next';
  import { useAuthStore } from '../stores/authStore';
import { useRouter } from 'vue-router';
import { toast } from 'vue3-toastify';
export default {
    components: {Settings, LogOut},
    setup(){
        const authStore  = useAuthStore();
        const router = useRouter();

        const logout = async () =>{
            try {
              let response =   await authStore.handelLogout();
              if(response.status === 200){
                setTimeout(()=>{
                    router.push('/login')
                },500)
                toast.success(response.data.message);
              }

            } catch (err) {
                console.log(err)
            }
        }

        return { logout }

    }
}
</script>

<style>

</style>