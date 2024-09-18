import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import PostSlice from '../Slice/slice.jsx'

const Store = configureStore({
    reducer:
    {
        Slice1 : PostSlice,
    }
})

export default Store

