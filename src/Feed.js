import React, { useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';

function Feed() {
  const [posts, setPosts] = useState([]);
  const sendPost = (evt) => {
    evt.preventDefault();
  };
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input type='text' />
            <button type='submit' onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className='feed__inputOptions'>
          <InputOption title='Photo' Icon={ImageIcon} color='#70b5f9' />
          <InputOption title='Video' Icon={SubscriptionsIcon} color='#e7a33e' />
          <InputOption title='Event' Icon={EventNoteIcon} color='#c0cbcd' />
          <InputOption
            title='Write Article'
            Icon={CalendarViewDayIcon}
            color='#7fc15e'
          />
        </div>
      </div>
      {posts.map((post) => (
        <Post
          name={post.name}
          description={post.description}
          message={post.message}
        />
      ))}
      <Post
        name='Snehasish Chakraborty'
        description='This is a test'
        message='This is a test to see if the post is working in my LinkedIn clone created using REACT.'
      />
    </div>
  );
}
export default Feed;
