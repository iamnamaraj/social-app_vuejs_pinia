import { defineStore } from "pinia";

export const usePostStore = defineStore('postStore',{
    state: () =>{
        return {
            posts: []
        }
    },
    actions: {
        async getPosts(){
            if(this.posts.length > 0) return ;
            const { getPosts } = await import ('../services/post_service');
            try {
                const response = await getPosts();
                this.posts = response.data.data
                return response
            } catch (error) {
                throw error
            }
        }
    }
});