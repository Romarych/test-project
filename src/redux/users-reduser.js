import { usersAPI } from "../api/api";

const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "users/SET_CURRENT_PAGE";
const SET_PAGES = "users/SET_PAGES";

let initialState = {
    users: [],
    currentPage: 1,
    pages: 0
}

const usersReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_PAGES:
            return {
                ...state, pages: action.pages
            }
        default:
            return state;
    }
}

export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setPages = (pages) => ({ type: SET_PAGES, pages })

export const getUsers = (currentPage) => async (dispatch) => {
    dispatch(setCurrentPage(currentPage))
    let response = await usersAPI.getUsers(currentPage)
    dispatch(setUsers(response.data.data))
    dispatch(setPages(response.data.meta.pagination.pages))
   
}

export default usersReducer;

