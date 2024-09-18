import React from 'react'
import Postdata from '../Action/Action.jsx'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data: [],
    isLoading: false,
    value:null,
    error: null,
  }; 
const PostSlice = createSlice({
    name : 'user',
    initialState : initialState,
    reducers : {},

    extraReducers : (builder) =>
    {
        builder
        .addCase(Postdata.pending, (state) =>
        {
            state.isLoading = true;
            state.error = false;
        })
        .addCase(Postdata.fulfilled, (state, {payload}) =>
            {
                state.isLoading = false;
                state.data = payload;
                state.error = false;
            })
            .addCase(Postdata.rejected, (state, {payload}) =>
                {
                    state.isLoading = false;
                    state.error = payload;
                })
    }
})

export default PostSlice.reducer