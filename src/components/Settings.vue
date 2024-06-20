<template>
    <div>
        <div class="flex justify-center gap-4 py-4 font-semibold">
            <button
                @click="activeTab = 'profile'"
                :class="{'border-b-4 border-gray-600': activeTab === 'profile'}"
            >
                Profile
            </button>
            <button
                @click="activeTab = 'change_password'"
                :class="{'border-b-4 border-gray-600': activeTab === 'change_password'}"
            >
                Change Password
            </button>
        </div>

        <div class="flex justify-center">
            <div v-show="activeTab === 'profile'" class="py-4 space-y-6" >
                <h1 class="text-2xl py-4"> Profile</h1>
                <div>
                    <label for="first_name" class="block text-sm text-gray-800">First name</label>
                    <input
                        type="text"
                        placeholder="enter your first name"
                        class="rounded-lg px-4 py-2 border bprder-gray-600 shadow leading-6 w-full"
                        v-model="user.first_name"
                    />
                    <small class="text-red-500"></small>
                </div>
                <div>
                    <label for="last_name" class="block text-sm text-gray-800">Last name</label>
                    <input
                        type="text"
                        placeholder="enter your last name"
                        class="rounded-lg px-4 py-2 border bprder-gray-600 shadow leading-6 w-full"
                        v-model="user.last_name"
                    />
                    <small class="text-red-500"></small>
                </div>
                <div>
                    <label for="email" class="block text-sm text-gray-800">Email</label>
                    <input
                        type="email"
                        placeholder="enter your email"
                        class="rounded-lg px-4 py-2 border bprder-gray-600 shadow leading-6 w-full"
                        v-model="user.email"
                    />
                    <small class="text-red-500"></small>
                </div>

                <div class="text-center">
                    <button
                        type="button"
                        @click="updateProfile"
                        class="py-2 px-4 bg-blue-500 rounded text-white"
                    >
                        Save
                    </button>
                </div>

            </div>

        </div>
        <div class="flex justify-center">
            <div v-show="activeTab === 'change_password'" class="py-4 space-y-6" >
                <h1 class="text-2xl py-4">Change Password</h1>
                <div>
                    <label for="current_password" class="block text-sm text-gray-800">Current password</label>
                    <input
                        type="password"
                        placeholder="enter your current password"
                        class="rounded-lg px-4 py-2 border bprder-gray-600 shadow leading-6 w-full"
                        v-model="user.current_password"
                    />
                    <small v-if="errors.current_password" class="text-red-500">{{ errors.current_password[0] }}</small>
                </div>

                <div>
                    <label for="new_password" class="block text-sm text-gray-800">New password</label>
                    <input
                        type="password"
                        placeholder="enter your current password"
                        class="rounded-lg px-4 py-2 border bprder-gray-600 shadow leading-6 w-full"
                        v-model="user.new_password"
                    />
                    <small v-if="errors.new_password" class="text-red-500">{{ errors.new_password[0] }}</small>

                </div>

                <div>
                    <label for="new_password_confirmation" class="block text-sm text-gray-800">Confirm password</label>
                    <input
                        type="password"
                        placeholder="enter same password again"
                        class="rounded-lg px-4 py-2 border bprder-gray-600 shadow leading-6 w-full"
                        v-model="user.new_password_confirmation"
                    />
                    <small class="text-red-500"></small>
                </div>
                <div class="text-center">
                    <button
                        type="button"
                        @click="updatePassword"
                        class="py-2 px-4 bg-blue-500 rounded text-white"
                    >
                        Save
                    </button>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import { reactive, ref } from 'vue';
import { useAuthStore } from '../stores/authStore';
import { toast } from 'vue3-toastify';

export default {
  setup() {
    const activeTab = ref('profile')
    const authStore = useAuthStore()
    const user = reactive(authStore.user)
    const errors = ref({})

    const updateProfile = async () =>{
        try {
           const response = await authStore.handelUpdateProfile(user);
            toast.success(response.data.message);
        } catch (err) {

            console.log(err)
        }
    }

       const updatePassword = async () =>{
        errors.value = {}
        try {
           const response = await authStore.handelUpdatePassword(user);
           console.log(response);
            user.current_password = ''
            user.new_password = ''
            user.new_password_confirmation = ''
            toast.success(response.data.message);

        } catch (err) {
            if(err.response.data.errors ){
               errors.value = err.response.data.errors
            }
        }
    }

    return { activeTab, user, updateProfile, updatePassword, errors };
  },
};
</script>


<style>

</style>