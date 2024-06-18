import { defineStore } from "pinia";
import { updatePassword, updateProfile } from "../services/auth_service";

export const useAuthStore = defineStore('authStore', {
    state: () =>{
        return {
            user: {},
            isLoggedIn: false,
        }
    },
    actions: {
        setUser(user){
            this.user = user;
            this.isLoggedIn = true;
        },
        setToken(token){
            localStorage.setItem('access_token',token);
        },
        getToken(){
          let  token = localStorage.getItem('access_token');
            if(token){
                return token;
            }
            return null;
        },
        async handelUpdateProfile (data) {
            try {
                const response = await updateProfile(data)
                this.user = response.data.user;
                return response
            } catch (err) {
                console.log(err)
            }
        },
        async handelUpdatePassword (data) {
            try {
                const response = await updatePassword(data)
                // this.user = response.data.user;
                console.log(response)
                return response
            } catch (err) {
                console.log(err)
            }
        }

    },
    persist: {
        enabled: true,
      },
})