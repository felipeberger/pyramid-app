import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userId: 1
}

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        updateUserId(state, action) {
            state.userId = action.payload
        } 
    }
})

const { actions, reducer } = usersSlice

export const { updateUserId } = actions

export default reducer 