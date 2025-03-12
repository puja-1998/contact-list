import React, { useState } from 'react'
import "./Form.css";
import addnewImage from "../../../assets/add-new.svg";
import Button from '../../UI/Button.js';

const Form = () => {

  return (
    <form className='form'>
      <div className='add-new-img'>
        <img src={addnewImage} alt='VERTICLE-IMG'></img>
      </div>
      <div className='input-text'>
        <input
          type='text'
          placeholder='name' />
        <input
          type='text'
          placeholder='surname' />
      </div>
      <div className='input-tel'>
        <input
          type='text'
          placeholder='Mobile-Number' />
      </div>
      <Button name='Add' />
    </form>
  )
}

export default Form