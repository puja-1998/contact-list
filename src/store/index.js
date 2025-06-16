import { configureStore } from "@reduxjs/toolkit";
import contactSlice from "./contact-slice";
import favContactSlice from "./FavContact-slice";


const store = configureStore({
    reducer: {
        contact: contactSlice.reducer,
        favContact: favContactSlice.reducer
    }
})

export default store;