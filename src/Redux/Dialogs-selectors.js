export const getDialogs = (state) => {
    return state.dialogPage.dialogs
}

export const getMessages = (state) => {
    return state.dialogPage.messages
}

export const getNewMessagesText = (state) => {
    return state.dialogPage.newMessageText
}

export const getIsAuth = (state) => {
    return state.auth.isAuth
}