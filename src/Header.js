import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import avatar from './avatar.jpg';

function Header() {
  const headerOption = [
    {
      icon: HomeIcon,
      title: 'Home',
    },
    {
      icon: GroupIcon,
      title: 'My Network',
    },
    {
      icon: BusinessCenterIcon,
      title: 'Jobs',
    },
    {
      icon: ChatIcon,
      title: 'Messages',
    },
    {
      icon: NotificationsIcon,
      title: 'Notifications',
    },
  ];
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
          alt=''
        />
        <div className='header__search'>
          {/* search icon */}
          <SearchIcon />
          <input type='text' />
        </div>
      </div>
      <div className='header__right'>
        {headerOption.map((e, idx) => (
          <HeaderOption key={idx} Icon={e.icon} title={e.title} />
        ))}
        <HeaderOption avatar={avatar} title='Me' />
      </div>
    </div>
  );
}

export default Header;
