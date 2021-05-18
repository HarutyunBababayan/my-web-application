
let initialState = {
    audios: [
        {id: 0, audio: ''},
        {id: 1, audio: ''},
        {id: 2, audio: ''},
        {id: 3, audio: ''},
    ]
};

export const AudioReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case "ADD_AUDIO":
            let newMessage = {
                id: state.audios.length,
                audio: action.newMessageBody,
            };
            return {...state, messages: [...state.audios, newMessage]}
        default:
            return state
    }
};

export const AudioAction = {
    actionAddUsersAudio: (newMessageBody: string) => ({type: "ADD_AUDIO", newMessageBody} as const)
}

export default AudioReducer;