import React, { useEffect, useState } from 'react'
import "./Form.css";
import addnewImage from "../../../assets/add-new.svg";
import Button from '../../UI/Button.js';
import { useDispatch, useSelector } from "react-redux";
import { contactListActions } from "../../../store/contact-slice.js";
import { addContact } from '../../../store/contact-actions.js';

const Form = () => {

  //firbase database
  const dispatch = useDispatch();
  const existingContactKey = useSelector(state => state.contact.key)
  const [userData, setUserData] = useState(
    {
      name: "",
      surname: "",
      tel: ""
    }
  );

  useEffect(() => {
    const fetchExistingContact = async() =>{
      const res = await fetch(`https://contact-list-31423-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${existingContactKey}.json`);
      const existingContact = await res.json();

      setUserData({
        name: existingContact?.name || "",
        surname: existingContact?.surname || "",
        tel:  existingContact?.tel || ""
      });
    }
    fetchExistingContact();
  }, [existingContactKey]);

//form submit
  const submitHandler = (e)=>{
    e.preventDefault();
    
    if(existingContactKey){
      dispatch(contactListActions.updateContact({
        key: existingContactKey,
        name: userData.name,
        surname: userData.surname,
        tel: userData.tel
      }));
    }
    else{
      dispatch(addContact(userData))
    };

    setUserData({
      name: "",
      surname: "",
      tel: ""
    });
  };

//Input Name 
const inputHandler =(e)=>{
  const {name, value} = e.target;
setUserData((preValue) =>{
  return {
    ...preValue,
    [name]: value
  }
})
};

  return (
    <form className='form' onSubmit={submitHandler}>
      <div className='add-new-img'>
        <img src={addnewImage} alt='VERTICLE-IMG'></img>
      </div>
      <div className='input-text'>
        <input
          type='text'
          placeholder='name' 
          name= 'name'
          value={userData.name}
          onChange={inputHandler}
          required
          pattern='[A-Za-z]+'/>
        <input
          type='text'
          placeholder='surname' 
          name= 'surname'
          value={userData.surname}
          onChange={inputHandler}
          required
          pattern='[A-Za-z]+'/>
      </div>
      <div className='input-tel'>
        <input
          type='text'
          placeholder='Mobile-Number' 
          name= 'tel'
          value={userData.tel}
          onChange={inputHandler}
          required
          pattern='[1-9]\d*$'
          maxLength='10'
          minLength='10'/>
      </div>
      <Button name='Add' />
    </form>
  )
}

export default Form