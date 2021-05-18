export  type AddressType = {
    city: string
    country: string
}

export type UserType = {
    id: number
    photoUrl: string
    login: string
    password: string
    gender: string
    followed: number[]
    age: number
    fullName: string
    name: string
    birtDay: string
    lastName: string
    status: string
    location: AddressType
}

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type PersonUserStateType = {
    userId: number | null,
    email: string | null,
    password: string | null,
    errorText: '',
    isFetching: boolean,
    isAuth: boolean,
    initialized: boolean
}

export type MessagesType = {
    id: number
    message: string
}