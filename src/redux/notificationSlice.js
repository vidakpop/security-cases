// real-time notification

import {createSlice} from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: {messages: []},
    reducers: {
        addNotification: (state, action) => {
            state.messages.push(action.payload)
        },
        
    }
})
export const {addNotification} = notificationSlice.actions
export default notificationSlice.reducer