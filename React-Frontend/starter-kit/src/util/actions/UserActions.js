import {AxiosWithAuth, CTOS_URL} from '../AxiosWithAuth';
import { LOGIN_SUCCESS } from './AuthenticationActions';

// this path contains information about the players name, the name & description of the room as well as all of the players in the room with you
const room_path = 'api/adv/init';

export const GET_ROOM_START = 'GET_ROOM_START';
export const GET_ROOM_SUCCESS = 'GET_ROOM_SUCCESS';
export const GET_ROOM_FAILURE = 'GET_ROOM_FAILURE';

export const current_room = () => (dispatch) => {

    console.log('hits user actions current_room')

    dispatch({
        type: GET_ROOM_START,
    })

    return AxiosWithAuth()
        .get(`${CTOS_URL+room_path}`)
        .then(response => {
            console.log('response data incoming')
            console.log(response.data)
            dispatch({
                type: GET_ROOM_SUCCESS
            })
        })

        .catch(error => {
            console.log('error getting current room, probably an invalid key')
            dispatch({
                type: GET_ROOM_FAILURE
            })
        })
}