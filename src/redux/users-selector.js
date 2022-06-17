export const getUsersData = (state) => {
    return state.usersPage.users
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getPages = (state) => {
    return state.usersPage.pages
}