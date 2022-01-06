import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/usersSlice'
import activeStoryReducer from './reducers/activeStorySlice'
import allStoriesReducer from './reducers/allStoriesSlice'

export const store = configureStore({
    reducer: {
        activeStory: activeStoryReducer, 
        userId: userReducer,
        allStories: allStoriesReducer
    }
})