//manage cases

import { createSlice } from '@reduxjs/toolkit'
import api from '../services/api'

const caseSlice = createSlice({
    name:'cases',
    initialState:{cases:[], loading:false},
})