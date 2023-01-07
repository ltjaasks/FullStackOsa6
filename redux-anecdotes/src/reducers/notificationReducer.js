import { createSlice } from "@reduxjs/toolkit"

const initialState = []
let timeoutId 

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setMessage(state, action) {
            const content = action.payload
            state = content
            return state
        }
    }
})

export const { setMessage } = notificationSlice.actions

export const setNotification = (content, time) => {
    return async dispatch => {
        clearTimeout(timeoutId)
        dispatch(setMessage(content))
        timeoutId = setTimeout(() => {
            dispatch(setMessage(''))
        }, 1000 * time)
    }
}

export default notificationSlice.reducer