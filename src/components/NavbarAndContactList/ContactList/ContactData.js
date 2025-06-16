import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { contactListActions } from '../../../store/contact-slice';
import { deleteContact } from '../../../store/contact-actions';
import { addToFavContact, removeFromFavContact } from '../../../store/FavContactActions';

const ContactData = (props) => {

    // add in fav 
    const [toggle, settoggle] = useState(false);
    const contactKeys = useSelector(state => state.favContact.contactKeys)
    //delete contact data
    const dispatch = useDispatch();
    const deleteContactHandler = (key) =>{
        dispatch(deleteContact(key));
    };

    //update contact data
    const updateContactHandler = (key) =>{
        dispatch(contactListActions.setExistingContactKey(key))
    };

    //Fav Contact List
    const addToFavContactHandler = (key) =>{
        if(toggle == true){
            dispatch(removeFromFavContact(key, contactKeys));
            settoggle(false);
        }
        else{
            dispatch(addToFavContact(key));
            settoggle(true);
        }
    }



  return (
        <tbody>
          {
            props.contacts.map((contact) => {
                return(
                    <tr key={contact.key}>
                    <td>
                    <div className='profile-img-box'>
                        <i className='fa-solid fa-user'></i>
                    </div>
                    </td>
                    <td><h2>{contact.name}</h2></td>
                    <td><h2>{contact.surname}</h2></td>
                    <td><h2>{contact.tel}</h2></td>
                    <td>
                    <div>
                        <i className='fa-solid fa-pen' onClick={() =>{updateContactHandler(contact.key)}} ></i>
                        <i className='fa-solid fa-trash' onClick={() =>{deleteContactHandler(contact.key)}}></i>
                        <i className={`fa-solid fa-heart ${toggle ? 'red-heart' : ''}`} onClick={() =>{addToFavContactHandler(contact.key)}} ></i>
                    </div>
                    </td>
                </tr>
                )
            })
          }
         
        </tbody>
  )
}

export default ContactData;