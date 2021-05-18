import {instance} from "./api";
import {UserType} from "../types/all";

export const DialogApI = {
    getPost(userId: number) {
        return instance.get('postData', {
            params: {
                id: userId
            }
        }).then(resolve => resolve.data[0]);
    },
    addMessage(data: UserType, id: number) {
        return instance.post(`postData/${id}`, {
            ...data
        }).then(resolve => resolve);
    },

    updateStatus(userDataId: number, userData: UserType) {
        return instance.put(`users/${userDataId}`, {
            ...userData
        }).then(resolve => resolve.data);
    },
};