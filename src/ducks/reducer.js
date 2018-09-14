const intitialState = {
    username: '',
    id: '',
    profile_pic: ''
}

const UPDATE_STATE = 'UPDATE_STATE';

export function updateState (user_id, username, profile_pic) {
    return {
        type: UPDATE_STATE,
        payload: {user_id, username, profile_pic}
    }
}


export default function reducer (state = intitialState, action) {
    switch (action.type) {
        case UPDATE_STATE:
            return Object.assign({}, state, action.payload)

        default:
            return state;
    }
}