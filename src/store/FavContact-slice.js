import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    contactKeys: []
}

const favContactSlice = createSlice({
    name: 'favContactList',
    initialState,
    reducers: {
        setContactKeys: (state, action)=>{
            const {key, favKey} = action.payload
            state.contactKeys = [...state.contactKeys, {key, favKey}]
        }
    }
})

export const favContactListActions = favContactSlice.actions;
export default favContactSlice;