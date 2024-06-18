<template>
    <div class="flex flex-col min-h-screen justify-center px-6 py-12 bg-gray-100">
        <div class="bg-white sm:bg-blue-100 rounded-lg shadow-md px-6 py-8 mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
            <h2 class="text-center font-bold text-2xl leading-9 tracking-tight text-gray-900 mb-6">
                Sign in to your account
            </h2>
            <form class="space-y-6 mb-5">

                <div>
                    <label for="email" class="block text-sm text-gray-800">Email</label>
                    <input
                        type="email"
                        class="rounded-lg px-4 py-2 border border-gray-600 shadow-sm leading-6 w-full"
                        placeholder="Enter your email"
                        v-model="user.email"
                    >
                    <small v-if="errors.email" class="text-red-500">{{ errors.email[0] }}</small>
                </div>

                <div>
                    <label for="password" class="block text-sm text-gray-800">Password</label>
                    <input
                        type="password"
                        class="rounded-lg px-4 py-2 border border-gray-600 shadow-sm leading-6 w-full"
                        placeholder="Enter password"
                        v-model="user.password"
                    >
                    <small v-if="errors.password" class="text-red-500">{{ errors.password[0] }}</small>
                </div>

                 <small v-if="message" class="text-red-500">{{ message }}</small>

                <div class="flex justify-center">
                    <button
                        type="button"
                        class="rounded-lg text-white bg-blue-700 px-2 py-2"
                        @click.prevent="handelLogin"
                    >
                        Login
                    </button>
                </div>

            </form>
            <div class="flex justify-center">
                <span>Don't have account yet ?</span>
                <router-link class="ml-2 font-semibold hover:text-blue-500 underline" :to="{name: 'Register'}">Create New</router-link>
            </div>

        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from "vue-router"
import { login } from "../services/auth_service"
import { toast } from 'vue3-toastify';
export default {
    setup(){
        const user = reactive({
            email: "",
            password: "",
        });
        const errors = ref({})
        const message = ref('')

        const router = useRouter()

        const handelLogin = async () => {
            errors.value = {}
            message.value = ''

            try {
                const response = await login(user)
                if(response.status === 200 ){
                    toast.success(response.data.message)

                    errors.value = {}
                    message.value = ''

                    setTimeout(()=>{
                        router.push('/')
                    },1000)
                }

                console.log(response);
            } catch (err) {

                console.log(err);
                if (err.response.status === 404 || err.response.status === 401 ) {
                    message.value = err.response.data.message;
                }else
                {
                    errors.value = err.response.data.errors;
                }

            }
        }


        return { user, errors, message, handelLogin  }
    }

}
</script>

<style scoped>

</style>
