import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    key: "",
    contact: {
        name: "",
        surname: "",
        tel: ""
    },
    totalContacts: 0
};

const contactSlice = createSlice({
    name: "contactList",
    initialState,
    reducers: {
        setExistingContactKey: (state, action) =>{
            state.key = action.payload;
        },
        updateContact: (state, action) => {
            const { key, name, surname, tel} = action.payload;
            fetch(`https://contact-list-31423-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${key}.json`,
                {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({name,surname,tel})
                }).catch(error => console.log(error));
                state.key = "";
        },
         fetchTotalCntacts: (state, action) =>{
            if(!action.payload){
                state.totalContacts = 0  //handle null data set as 0
            }
            else{
                state.totalContacts = Object.keys(action.payload).length
            }
           
        }
    }
})

export const contactListActions = contactSlice.actions;

export default contactSlice;
