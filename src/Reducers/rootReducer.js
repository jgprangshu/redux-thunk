import { LOAD_USERS_SUCCESS,LOAD_USERS_ERROR,LOAD_USERS_LOADING } from '../Actions/actions';


const initState = {
    data: [],
    loading: false,
    error: ''
}
const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case LOAD_USERS_LOADING: {
            return {
                ...state,
                loading: true,
                error : ''
            }
        }

            case LOAD_USERS_SUCCESS:{
                return{
                    ...state,
                    data : action.data,
                    loading : false
                }
            }

            case LOAD_USERS_ERROR: {
                return {
                    ...state,
                    loading: false,
                    error: action.error
                };
            }
            default : {
                return state;
            }
        }

    }

    export default rootReducer