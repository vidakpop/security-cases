//manage cases

import { createSlice } from '@reduxjs/toolkit'
import api from '../services/api'

const caseSlice = createSlice({
    name:'cases',
    initialState:{cases:[], loading:false},
    reducers:{
        setCases:(state,action)=>{
            state.cases=action.payload
        },
        addCase:(state,action)=>{
            state.cases.push(action.payload)
        },
        
    },
})
export const {setCases,addCase} = caseSlice.actions

{/*fetch cases from api */}
export const fetchCases = () => async (dispatch) =>{
    try {
        const response = await api.get('/cases/')
        dispatch(setCases(response.data))
    } catch (error) {
        console.error(error)
    }
}

export default caseSlice.reducer