import { defineStore } from "pinia";
import { useAuthStore } from "./authStore";

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
        },
        async likeUnlike(id){
            const{ likeUnlike } = await import('../services/post_service')
            try {
                const response = await likeUnlike(id);
                if(response.status === 201){
                    this.incrementLikesCount(id, response.data.data);

                } else if (response.status === 204) {
                    this.decrementLikesCount(id);
                }
                return response
            } catch (err) {
                throw err
            }

        },
        incrementLikesCount(id, newLike) {
            const postIndex = this.posts.data.findIndex(p => p.id === id);
            if (postIndex !== -1) {
              this.posts.data[postIndex].likes.push(newLike);
              this.posts.data[postIndex].likes_count += 1;
            }
          },
        decrementLikesCount(id) {
            const postIndex = this.posts.data.findIndex(p => p.id === id);
            if (postIndex !== -1 && this.posts.data[postIndex].likes_count > 0) {
              const authStore = useAuthStore();
              const currentUserId = authStore.user.id;

              this.posts.data[postIndex].likes = this.posts.data[postIndex].likes.filter(like => like.user_id !== currentUserId);

              this.posts.data[postIndex].likes_count -= 1;
            }
        },
    }
});