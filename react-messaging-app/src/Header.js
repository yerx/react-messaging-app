import React from 'react';
import './Header.css';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        {/* Avatars for logged in user */}
      <Avatar
        className="header__avatar"
        alt="HerName"
        src=""
        // alt={user?.displayName}
        // src={user?.photoURL}
      />
        {/* Time icon */}
      </div>
      <div className="header__search">
        {/* Search icon */}
        {/* input */}
      </div>
      <div className="header__right">
        {/* help icon */}
      </div>
    </div>
  )
}

export default Header;