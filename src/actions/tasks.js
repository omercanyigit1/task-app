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
    API_URL,
} from "./types";
import axios from 'axios';

const token = localStorage.getItem('access_token');

export const fetchTaskListRequest = () => ({
    type: TASK_LIST_REQUEST
});

export const fetchTaskListFailed = error => ({
    type: TASK_LIST_FAILED,
    payload: error
});

export const fetchTaskListSuccess = data => ({
    type: TASK_LIST_SUCCESS,
    payload: data
});

export const postTaskUpdateRequest = () => ({
    type: TASK_UPDATE_REQUEST
});

export const postTaskUpdateFailed = error => ({
    type: TASK_UPDATE_FAILED,
    payload: error
});

export const postTaskUpdateSuccess = data => ({
    type: TASK_UPDATE_SUCCESS,
    payload: data
});

export const postTaskRemoveRequest = () => ({
    type: TASK_DELETE_REQUEST
});

export const postTaskRemoveFailed = error => ({
    type: TASK_DELETE_FAILED,
    payload: error
});

export const postTaskRemoveSuccess = data => ({
    type: TASK_DELETE_SUCCESS,
    payload: data
});

export const postTaskAddRequest = () => ({
    type: TASK_ADD_REQUEST
});

export const postTaskAddFailed = error => ({
    type: TASK_ADD_FAILED,
    payload: error
});

export const postTaskAddSuccess = data => ({
    type: TASK_ADD_SUCCESS,
    payload: data
});

export const fetchTaskList = () => {
    const axiosConfig = {
        headers: {
            "accept": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    };

    return dispatch => {
        dispatch(fetchTaskListRequest());
        axios.get(`${API_URL}/tasks`, axiosConfig).then((response) => {
            dispatch(fetchTaskListSuccess(response.data))
        }).catch((e) => {
            dispatch(fetchTaskListFailed(e));
        })
    }
};

export const postTaskAdd = (desc) => {

    const data = {
        "description": `${desc}`,
        "completed": false
    };

    const axiosConfig = {
        headers: {
            "accept": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    };

    return dispatch => {
        dispatch(postTaskAddRequest());
        axios.post(`${API_URL}/tasks/`, data, axiosConfig).then((response) => {
            dispatch(postTaskAddSuccess(response.data))
        }).catch((e) => {
            dispatch(postTaskAddFailed(e));
        })
    }
};

export const postTaskUpdate = (taskId) => {
    const axiosConfig = {
        headers: {
            "accept": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    };

    return dispatch => {
        dispatch(postTaskUpdateRequest());
        axios.post(`${API_URL}/tasks/${taskId}`, axiosConfig).then((response) => {
            dispatch(postTaskUpdateSuccess(response.data))
        }).catch((e) => {
            dispatch(postTaskUpdateFailed(e));
        })
    }
};

export const postTaskRemove = (taskId) => {
    const axiosConfig = {
        headers: {
            "accept": "application/json",
            "Authorization": `Bearer ${token}`,
        }
    };

    return dispatch => {
        dispatch(postTaskRemoveRequest());
        axios.delete(`${API_URL}/task/${taskId}`, axiosConfig).then((response) => {
            console.log(response.data);
            dispatch(postTaskRemoveSuccess(response.data._id))
        }).catch((e) => {
            dispatch(postTaskRemoveFailed(e));
        })
    }
};

