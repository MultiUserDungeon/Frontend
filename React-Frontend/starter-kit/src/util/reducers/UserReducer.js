import {
    GET_ROOM_START,
    GET_ROOM_SUCCESS,
    GET_ROOM_FAILURE,
} from '../actions/UserActions'

const initialState = {
    shit: 'fuck me yo',

    startGettingRoom: false,
    getRoomSuccess: false,
    getRoomError: '',

    user2: {},
}

export const UserReducer = (state = initialState, action) => {
    switch(action.type) {

        case GET_ROOM_START:
            return {
                ...state,
                startGettingRoom: true,
                getRoomError: ''
            }
        
        case GET_ROOM_SUCCESS:
            return {
                ...state,
                getRoomSuccess: true,
                user2: action.payload
            }

        case GET_ROOM_FAILURE:
            return {
                ...state,
                getRoomSuccess: false,
                getRoomError: action.payload,
            }

        default:
            return state;
    }
}