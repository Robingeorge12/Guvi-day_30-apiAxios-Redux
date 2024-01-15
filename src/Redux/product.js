import { createSlice } from "@reduxjs/toolkit";
import {deleteUserData, editUserData, getAllUsers,postNewUser} from "./actions"



const initialState = {
    users: [],
    fetch: false,
  isLoading: false,
  isError: false, 
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
extraReducers:(builder)=>{
 
    builder.addCase(getAllUsers.pending,(state)=>{
        state.isLoading = true;
    }).addCase(getAllUsers.fulfilled,(state,{payload})=>{
        
        state.isLoading = false;
        state.users = payload

    }).addCase(getAllUsers.rejected,(state,{payload})=>{

        state.isLoading = false;
        state.isError = payload;
    })
 
 

    builder.addCase(postNewUser.pending,(state)=>{
        state.isLoading = true;
    })
    builder.addCase(postNewUser.fulfilled,(state,{payload})=>{
        
        state.isLoading = false;
        state.fetch = !state.fetch
        // state.users.push(payload) 

    })
    builder.addCase(postNewUser.rejected,(state,{payload})=>{

        state.isLoading = false;
        state.isError = payload;
    })
///edit.............................................................

builder.addCase(editUserData.pending,(state)=>{
    state.isLoading = true;
}).addCase(editUserData.fulfilled,(state,{payload})=>{

    state.isLoading = false;
    state.fetch = !state.fetch
    window.location.reload();
    // state.isError = !state.isError;
    // console.log(payload)



    // state.users.forEach((user)=>{
    //     if(user.id === payload.data.id){
    //         return {...user,name:payload.data.name,
    //             username:payload.data.username,
    //             company:{...user.company,bs:payload.data.bs}}
    //     }
    //     return user
    // })


}).addCase(editUserData.rejected,(state,{payload})=>{
    state.isLoading = false;
    state.isError = payload;
})



builder.addCase(deleteUserData.pending,(state)=>{
    state.isLoading = true;
    state.isError = false;
}).addCase(deleteUserData.fulfilled,(state,action)=>{

    const deletedUserId = action.payload;
    console.log(deletedUserId)
    state.users = state.users.filter((user) => user.id !== deletedUserId);
    state.isLoading = false;

}).addCase(deleteUserData.rejected,(state,payload)=>{
    state.isLoading = false;
    state.isError = payload
})



}

});

// export const { getData, postData, editData, deleteData } = usersSlice;
export default usersSlice.reducer;
