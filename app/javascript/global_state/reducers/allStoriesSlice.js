import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const allStoriesSlice = createSlice({
    name: "allStories",
    initialState,
    reducers: {
        updateAllStories(state, action) {
            state.push(action.payload) 
        }
    }
})

const { actions, reducer } = allStoriesSlice

export const { 
    updateAllStories
} = actions

export default reducer