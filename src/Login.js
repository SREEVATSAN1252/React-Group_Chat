import React from 'react'
import Button from '@mui/material/Button';
import "./Login.css"
import { auth, provider } from './firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
function Login() {
  const [{user},dispatch] = useStateValue();
  const signIn = ()=>{
    auth.signInWithPopup(provider).then(result=>{console.log(result);
    dispatch({
      type:actionTypes.SET_USER,
      user:result.user,
    })
   
    })
    .catch(error=>{alert(error.message)})
  }
  return (
    <div className='login'>
        <div className='login__container'>
            <img src='https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454'/>
            <h1>Sign in to Slack-Chat HQ</h1>
            <p>sreevatsan.slack.com</p>
            <Button onClick={signIn} variant='text'>Sign in with Google</Button>
        </div>
        </div>
  )
}

export default Login