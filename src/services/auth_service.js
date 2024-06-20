import { http } from "./http_service";

export function register(data){
    return http().post("register", data);
}

export function login(data){
    return http().post("login", data);
}
export function updateProfile(data){
    return http().post("update-profile", data);
}
export function updatePassword(data){
    return http().post("update-profile", data);
}
export function logOUT(){
    return http().get('logout');
}