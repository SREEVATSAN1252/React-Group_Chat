import React from 'react'
import "./Header.css"
import Avatar from '@mui/material/Avatar';
import { AccessTime, HelpOutline, SearchOutlined } from '@mui/icons-material';
import { useStateValue } from './StateProvider';

function Header() {
   const [{user}] = useStateValue();
  return (
    <div className='header'>
       <div className='header__left'>
          <Avatar src={user?.photoURL}/>
          <AccessTime/>
           </div> 
        <div className='header__search'>
            <SearchOutlined/>
         <input placeholder='Search Something...'/>
        </div>
        <div className='header__right'>
            <HelpOutline/>
        </div>
        </div>
  )
}

export default Header