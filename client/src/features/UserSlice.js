import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const login=createAsyncThunk("user/login",async(udata,{rejectWithValue})=>{
    try{
        const response=await axios.post("http://localhost:3003/login",udata);
        if(response.data.user)
            return response.data;
        else
            return rejectWithValue(response?.data?.message||"Invalid Credentials");
    }
    catch(error){
        return rejectWithValue(error.response?.data?.message||"Invalid Credentials");
    }
});
export const register=createAsyncThunk("user/register",async(udata,{rejectWithValue})=>{
    try{
        const response=await axios.post("http://localhost:3003/register",udata);
        if(response.data)
            return response.data;
        else
            return rejectWithValue(response?.data?.message||"Error in Registration");
    }
    catch(error){
        return rejectWithValue(error.response?.data?.message||"Error in Registration");
    }
});


const initialState={
    user:{},
    isLoading:false,
    isSucess:false,
    isError:false,
    message:""
}
export const UserSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        resetStatus:(state)=>{
            state.user={};
            state.isLoading=false;
            state.isSucess=false;
            state.isError=false;
            state.message="";
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(login.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.user=action.payload.user;
            state.message=action.payload.message;
            state.isSucess=true;
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.message=action.payload;
        })
        .addCase(register.pending,(state)=>{
            state.isLoading=true;
        })
        .addCase(register.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.message=action.payload.message;
            state.isSucess=true;
        })
        .addCase(register.rejected,(state,action)=>{
            state.isLoading=false;
            state.isError=true;
            state.message=action.payload;
        })
    }
});
export const {resetStatus}=UserSlice.actions;
export default UserSlice.reducer;