import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice'
import caseReducer from './caseSlice'
import notificationReducer from './notificationSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        case: caseReducer,
        notification: notificationReducer
    }   
})  