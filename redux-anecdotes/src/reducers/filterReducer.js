import { createSlice } from "@reduxjs/toolkit"

const initialState = []

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setFilter(state, action) {
            const content = action.payload
            state = content
            console.log(state)
            return state
        }
    }
})

export const { setFilter } = filterSlice.actions
export default filterSlice.reducer