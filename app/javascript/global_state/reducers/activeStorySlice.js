import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    situation: "",
    complication: "",
    question: "",
    answer: "",
    insight1:"",
    insight2:"",
    insight3:"",
    support11:"",
    support12:"",
    support13:"",
    support21:"",
    support22:"",
    support23:"",
    support31:"",
    support32:"",
    support33:""
}

const activeStorySlice = createSlice({
    name: "activeStory",
    initialState,
    reducers: {
        updateSituation(state, action) {
            state.situation = action.payload
        },
        updateComplication(state, action) {
            state.complication = action.payload
        },
        updateQuestion(state, action) {
            state.question = action.payload
        },
        updateAnswer(state, action) {
            state.answer = action.payload
        },
        updateInsight1(state, action) {
            state.insight1 = action.payload
        },
        updateInsight2(state, action) {
            state.insight2 = action.payload
        },
        updateInsight3(state, action) {
            state.insight3 = action.payload
        },
        updateSupport11(state, action) {
            state.support11 = action.payload
        },
        updateSupport12(state, action) {
            state.support12 = action.payload
        },
        updateSupport13(state, action) {
            state.support13 = action.payload
        },
        updateSupport21(state, action) {
            state.support21 = action.payload
        },
        updateSupport22(state, action) {
            state.support22 = action.payload
        },
        updateSupport23(state, action) {
            state.support23 = action.payload
        },
        updateSupport31(state, action) {
            state.support31 = action.payload
        },
        updateSupport32(state, action) {
            state.support32 = action.payload
        },
        updateSupport33(state, action) {
            state.support33 = action.payload
        }
    }
})

const { actions, reducer } = activeStorySlice

export const { 
    updateSituation,
    updateComplication,
    updateQuestion,
    updateAnswer,
    updateInsight1,
    updateInsight2,
    updateInsight3,
    updateSupport11,
    updateSupport12,
    updateSupport13,
    updateSupport21,
    updateSupport22,
    updateSupport23,
    updateSupport31,
    updateSupport32,
    updateSupport33
} = actions

export default reducer