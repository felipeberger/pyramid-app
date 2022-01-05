import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/usersSlice'
import activeStoryReducer from './reducers/activeStorySlice'

export const store = configureStore({
    reducer: {
        userId: userReducer,
        activeStory: activeStoryReducer 
    }
})