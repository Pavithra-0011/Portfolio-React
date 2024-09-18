import React from 'react'
import { createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit'
import axios from 'axios'

const Postdata = createAsyncThunk('user/Post', async(Message, {isRejectedWithValue}) =>
{
    try
    {
        const response = await axios.post("https://sheet.best/api/sheets/cf5a6d2b-a4d5-4ff1-b2c0-cc5793446771", Message);
        console.log("Message Posted Sucessfully", response.data)
        return response.data
    }
    catch(error)
    {
        console.log(error.response.data)
        return isRejectedWithValue(error?.response)
    }

})

export default Postdata


