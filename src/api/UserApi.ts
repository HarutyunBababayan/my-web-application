import {instance} from "./api";
import {UserType} from "../types/all";

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 3) {

        return instance.get('users', {
            params: {
                _page: currentPage, _limit: pageSize
            }
        })
    }, toggleFollow(userDataId: number, userData: UserType) {
        return instance.put(`users/${userDataId}`, {
            ...userData
        })
    }
};