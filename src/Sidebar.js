import './Sidebar.css';
import { Avatar } from '@material-ui/core';

function Sidebar() {
  const recentItem = (topic) => (
    <div className='sidebar__recentItems'>
      <span className='sidebar__hashtag'>#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
          alt=''
          className='sidebar__top'
        />
        <Avatar className='sidebar__avatar' />
        <h2>Snehasish Chakraborty</h2>
        <h4>contact@snehasish-chakraborty.com</h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed you</p>
          <p className='sidebar__statnumber'>297</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on posts</p>
          <p className='sidebar__statnumber'>1,039</p>
        </div>
      </div>
      <div className='sidebar__bottom'>
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('unity')}
        {recentItem('angular')}
        {recentItem('springboot')}
      </div>
    </div>
  );
}

export default Sidebar;
