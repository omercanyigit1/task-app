import {
    TASK_LIST_REQUEST,
    TASK_LIST_SUCCESS,
    TASK_LIST_FAILED,
    TASK_UPDATE_REQUEST,
    TASK_UPDATE_SUCCESS,
    TASK_UPDATE_FAILED,
    TASK_DELETE_REQUEST,
    TASK_DELETE_SUCCESS,
    TASK_DELETE_FAILED,
    TASK_ADD_REQUEST,
    TASK_ADD_SUCCESS,
    TASK_ADD_FAILED,
} from "./../actions/types";

const initialState = {
    tasks: [],
    loading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case TASK_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case TASK_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                tasks: action.payload
            };
        case TASK_LIST_FAILED:
            return {
                ...state,
                loading: false,
                error: 'Invalid Tasks',
            };
        case TASK_ADD_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case TASK_ADD_SUCCESS:
            return {
                ...state,
                loading: false,
                tasks: state.tasks.concat(action.payload)
            };
        case TASK_ADD_FAILED:
            return {
                ...state,
                loading: false,
                error: 'Invalid Tasks',
            };
        case TASK_DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case TASK_DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                tasks: state.tasks.filter(element => element._id !== action.payload)
            };
        case TASK_DELETE_FAILED:
            return {
                ...state,
                loading: false,
                error: 'Invalid Tasks',
            };
        default:
            return state;
    }
}

