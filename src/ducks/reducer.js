import axios from "axios";

// CONSTANTS

const UPDATE_BUSPROFILE = "UPDATE_BUSPROFILE";

// ACTION CREATORS

export function updateBusProfile() {
    return {
        type: UPDATE_BUSPROFILE,
        payload: true
    };
}


// INITIAL STATE

const initialState = {
   
    busEmail: ""


};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // case `${GET_USER}_PENDING`:
        //     return Object.assign({}, state, { isLoading: true });

        // case `${GET_USER}_FULFILLED`:
        //     return Object.assign({}, state, {
        //         isLoading: false,
        //         user: action.payload
        //     });

        // case `${GET_USER}_REJECTED`:
        //     return Object.assign({}, state, { isLoading: false, didErr: true });

        case UPDATE_BUSPROFILE:
            return Object.assign({}, state, { busProfile: action.payload });
        default:
            return state;
    }
}
