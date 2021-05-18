import axios from "axios";
import {instance} from "./api";
import {PostType, UserType} from "../types/all";

export const ProfileApi = {
    getUsers() {
        return instance.get('posts', {}).then(res => res.data)
    },

    getUser(userID: number) {
        return instance.get('users', {
            params: {
                id: userID
            }
        }).then(resolve => resolve.data);
    },
    addPost(newPost: PostType) {
        return instance.post('posts', {
            ...newPost
        })
    },
    updateStatus(userDataId: number, userData: UserType) {
        return instance.put(`users/${userDataId}`, {
            ...userData
        }).then(resolve => resolve.data);
    },
    updateUser(userDataId: number, userData: UserType) {
        return instance.put(`users/${userDataId}`, {
            ...userData
        }).then(resolve => resolve.data);
    },
    //File
    savePhoto(photoFile: string) {
        let formData = new FormData();
        formData.append('image', photoFile);

        return axios({
            method: 'post',
            url: 'http://localhost:8070/fileupload',
            data: formData,
            headers: {'Content-Type': 'multipart/form-data'}
        }).then(function (response) {
            //handle success
            console.log(response);
        })
            .catch(function (response) {
                //handle error
                console.log(response);
            });
    }
};