import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import Messages from '../Messages/Messages';
import Notifications from '../Notifications/Notifications';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

const UserStatusBar = () => {

  return (
    <nav className='flex items-center justify-between p-4 '>
      <SearchBar />
      <div className='flex items-center gap-6 justify-end w-full'> 
        <Messages />
        <Notifications />
        <ProfileInfo />
      </div>
    </nav>
  )
}

export default UserStatusBar;
