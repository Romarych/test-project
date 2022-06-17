import * as axios from "axios";

const instance = axios.create({
    withCredentials: false,
    headers: { "Authorization": `Bearer ${"cd10555d1e85b670bd5514a91912f0bf74b8f3d1731d0bcf60ad5da7e87cda5e"}` },
    baseURL: `https://gorest.co.in/public/v1/users`,
})

export const  usersAPI = {
    getUsers(currentPage = 1) {
        return instance.get(`?page=${currentPage}`)
    },
}

export const  profileAPI = {
    getProfile(userId) {
        return instance.get(`/${userId}`)
    },
    saveProfile(profile, userId) {
        return instance.put(`/${userId}`, profile)
    }
}