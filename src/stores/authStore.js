import { defineStore } from "pinia";

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
        }

    },
    persist: {
        enabled: true,
      },
})