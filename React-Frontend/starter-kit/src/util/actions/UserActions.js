import axios from 'axios';

import {AxiosWithAuth, CTOS_URL} from '../AxiosWithAuth';

// this path contains information about the players name, the name & description of the room as well as all of the players in the room with you
const room_path = 'api/adv/init';

export const GET_ROOM_START = 'GET_ROOM_START';
export const GET_ROOM_SUCCESS = 'GET_ROOM_SUCCESS';
export const GET_ROOM_FAILURE = 'GET_ROOM_FAILURE';

export const current_room = () => (dispatch) => {

    dispatch({
        type: GET_ROOM_START,
    })

    return axios
        .get(`${CTOS_URL+room_path}`, AxiosWithAuth)
        .then(response => {
             console.log(response.data)
        })
        .catch(error => {
            console.log('error getting current room, probably an invalid key')
            dispatch({
                type: GET_ROOM_FAILURE
            })
        })
}