import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Login.css';
import linkedIn from './LinkedIn.png';
import { auth } from './Firabase';
import { login } from './features/user/userSlice';

function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const dispatch = useDispatch();

  const register = () => {
    if (!name) return alert('Enter Your Full Name to Register');
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePicture,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePicture,
              })
            );
          });
      })
      .catch((err) => alert(err.message));
  };
  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl,
          })
        );
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className='login'>
      <img src={linkedIn} alt='LinkedIn Clone' />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type='text'
          placeholder='Full Name (required if registering)'
        />
        <input
          value={profilePicture}
          onChange={(e) => setProfilePicture(e.target.value)}
          type='text'
          placeholder='Profile Picture Url (Optional)'
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          placeholder='Email'
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          placeholder='Password'
        />
        <button type='submit' onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{' '}
        <span className='login__register' onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
