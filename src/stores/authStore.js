import { defineStore } from "pinia";
import { logOUT, updatePassword, updateProfile } from "../services/auth_service";

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
                throw err
            }
        },
        async handelUpdatePassword (data) {
            try {
                const response = await updatePassword(data)
                this.user = response.data.user;
                console.log(response)
                return response
            } catch (err) {
                throw err
            }
        },
        async handelLogout(){
           try {
            const response = await logOUT()
            this.user = {}
            this.isLoggedIn = false
            localStorage.setItem('access_token','')
            return response

           } catch (err) {
            throw err
           }
        }

    },
    persist: {
        enabled: true,
      },
})