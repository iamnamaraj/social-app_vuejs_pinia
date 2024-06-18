<template>
    <div class="flex flex-col min-h-screen justify-center px-6 py-12 bg-gray-100">
        <div class="bg-white sm:bg-blue-100 rounded-lg shadow-md px-6 py-8 mx-auto sm:max-w-md md:max-w-lg lg:max-w-xl">
            <h2 class="text-center font-bold text-2xl leading-9 tracking-tight text-gray-900 mb-6">
                Sign up new account
            </h2>
            <form class="space-y-6 mb-5">
                <div>
                    <label for="first_name" class="block text-sm text-gray-800">First name</label>
                    <input
                        type="text"
                        class="rounded-lg px-4 py-2 border border-gray-600 shadow-sm leading-6 w-full"
                        placeholder="Enter your first name"
                        v-model="user.first_name"
                    >
                    <small v-if="errors.first_name" class="text-red-500">{{ errors.first_name[0] }}</small>
                </div>
                <div>
                    <label for="last_name" class="block text-sm text-gray-800">Last name</label>
                    <input
                        type="text"
                        class="rounded-lg px-4 py-2 border border-gray-600 shadow-sm leading-6 w-full"
                        placeholder="Enter your last name"
                        v-model="user.last_name"
                    >
                    <small v-if="errors.last_name" class="text-red-500">{{ errors.last_name[0] }}</small>

                </div>
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
                <div>
                    <label for="password_confirmation" class="block text-sm text-gray-800">Confirm password</label>
                    <input
                        type="password"
                        class="rounded-lg px-4 py-2 border border-gray-600 shadow-sm leading-6 w-full"
                        placeholder="Enter password again"
                        v-model="user.password_confirmation"
                    >
                    <small v-if="errors.password_confirmation" class="text-red-500">{{ errors.password_confirmation[0] }}</small>

                </div>
                <div class="flex justify-center">
                    <button
                        type="button"
                        class="rounded-lg text-white bg-blue-700 px-2 py-2"
                        @click.prevent="handelRegister"
                    >
                        Create account
                    </button>
                </div>
            </form>
            <div class="flex justify-center">
                <span>Already have account ?</span>
                <router-link class="ml-2 font-semibold hover:text-blue-500 underline" :to="{name: 'Login'}">Login</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useRouter } from "vue-router"
import { register } from "../services/auth_service"
import { toast } from 'vue3-toastify';
export default {
    setup(){
        const user = reactive({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            password_confirmation: "",
        });
        const errors = ref({})
        const router = useRouter()

        const handelRegister = async () => {
            errors.value = {}
            try {
                const response = await register(user)
                if(response.status === 201 ){
                    toast.success(response.data.message)
                    errors.value = {}
                    setTimeout(()=>{
                        router.push('/login')
                    },1000)
                }
            } catch (err) {
                errors.value = err.response.data.errors;
            }
        }


        return { user, errors, handelRegister  }
    }

}
</script>

<style scoped>

</style>
