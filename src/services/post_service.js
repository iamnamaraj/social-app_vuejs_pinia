import { http } from "./http_service";

export function getPosts(){
    return http().get('posts/public');
}
export function likeUnlike(id){
    return http().get(`like-unlike/${id}`);
}