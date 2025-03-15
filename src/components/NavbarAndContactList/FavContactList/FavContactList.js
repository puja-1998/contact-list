import React from 'react';
import FavContactData from './FavContactData';
import { useState, useEffect } from 'react';

function FavContactList() {
  const [favContacts, setFavContacts] = useState([])

  useEffect(()=>{
    const fetchContacts = async () =>{
      const res = await fetch("https://contact-list-31423-default-rtdb.asia-southeast1.firebasedatabase.app/fav-contact-list.json")
      const data = await res.json();

      const contactsData = [];

      for(const key in data){
        contactsData.push({
          key: key,
          name: data[key].name,
          surname: data[key].surname,
          tel: data[key].tel
        });
      }
      setFavContacts(contactsData);
      
    }
      fetchContacts();
  }, [favContacts]); 

  return (
    <div className='fav-contact-list'>
      {
        favContacts.length > 0 ? (
          <table>
          <thead>
            <tr>
              <th><p>Profile</p></th>
              <th><p>Name</p></th>
              <th><p>Surname</p></th>
              <th><p>Mobile</p></th>
            </tr>
          </thead>
          <FavContactData favContacts={favContacts}/>
        </table>
        ):
        (
          <p style={{textAlign:"center", fontSize:"16px", fontWeight:"bold"}}>No Contacts Found!</p>
        )
      }
     
    </div>
  )
}

export default FavContactList