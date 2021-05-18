import {instance} from "./api";
import {UserType} from "../types/all";

export const LoginApi = {
    sigIn(email: string, password: string) {
        return instance.get('users', {
            params: {
                email: email, password: password,
            }
        }).then(resolve => {
            if (resolve.data.length !== 0) {
                return resolve.data
            }
            return 'Пврол не сотвесту'
        });
    },
    sigUp(data:UserType ) {
        return instance.post('users', {
            ...data
        }).then(resolve => resolve.data);
    }
};