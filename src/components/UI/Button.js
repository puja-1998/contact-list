import React from 'react';
import './Button.css';

export default function button(props) {
  return (
    <div>
        <button type='submit'>{props.name}</button>
    </div>
  )
}
