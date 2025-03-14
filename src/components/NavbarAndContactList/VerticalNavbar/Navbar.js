import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import { useDispatch, useSelector } from 'react-redux';
import { contactListActions } from '../../../store/contact-slice';
import {Link} from 'react-router-dom';

const Navbar = () => {

    // counting total contacts
    // const [totalContacts, setTotalContacts] = useState("0");
    const dispatch = useDispatch();
    const totalContacts = useSelector(state => state.contact.totalContacts);

    useEffect(() =>{
        const fetchTotalCntacts = () =>{
            fetch("https://contact-list-31423-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list.json")
            .then(res => res.json())
            .then(data => {
              dispatch(contactListActions.fetchTotalCntacts(data))
            })
        }
        fetchTotalCntacts();
    }, []);

  return (
    <ul>
        <li>
            <Link to="/" className='link'>
                <i className='fa-solid fa-address-book'></i>
                <div>
                    <h2>All contacts</h2>
                    <p>{totalContacts} contacts</p>
                </div>
            </Link>
        </li>
          <li>
              <Link to="/fav" className='link'>
              <i className='fa-solid fa-heart'></i>
                  <div>
                      <h2>Favourites</h2>
                      <p>10 contacts</p>
                  </div>
              </Link>
          </li>
    </ul>
  )
}

export default Navbar