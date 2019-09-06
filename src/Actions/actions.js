import axios from "axios";

export const LOAD_USERS_LOADING = 'REDUX_THUNK_LOAD_USERS_LOADING';
export const LOAD_USERS_SUCCESS = 'REDUX_THUNK_LOAD_USERS_SUCCESS';
export const LOAD_USERS_ERROR = 'REDUX_THUNK_LOAD_USERS_ERROR';

export const loadUsers = () => (dispatch) => {
    dispatch ({type : LOAD_USERS_LOADING})

    axios.get('https://swapi.co/api/people/1')
        .then(
            data => dispatch({type : LOAD_USERS_SUCCESS, data}),
            error => dispatch({type: LOAD_USERS_ERROR,  error: error.message || 'Unexpected Error!!!'})
            )
        }