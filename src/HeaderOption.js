import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core';
import { selectUser } from './features/user/userSlice';
import { useSelector } from 'react-redux';

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <div className='headerOption' onClick={onClick}>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && user && (
        <Avatar className='headerOption__icon' src={user.photoUrl}>
          {user.displayName?.charAt(0)}
        </Avatar>
      )}
      {(user || !avatar) && <h3 className='headerOption__title'>{title}</h3>}
    </div>
  );
}

export default HeaderOption;
