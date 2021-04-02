import React, { SyntheticEvent } from "react"
import { useDispatch } from 'react-redux';
import { createActionLogin, createActionChangeUsername, createActionChangePassword } from './slices/authSlice';
import { useAppSelector } from './types/reduxTypes';

const Login = () => {
  const dispatch = useDispatch();
  const usernameValue = useAppSelector((state) => state.authenticate.username)
  const passwordValue = useAppSelector((state) => state.authenticate.password)

  const login = (event: SyntheticEvent) => {
    event.preventDefault();

    const action = createActionLogin(['user', 'pass']);
    dispatch(action);
  }

  const usernameOnChange = (value: string) => {
    const action = createActionChangeUsername(value);
    dispatch(action);
  }

  const passwordOnChange = (value: string) => {
    const action = createActionChangePassword(value);
    dispatch(action);
  }

  return (
    <div className="formContainer"> 
      <form> 
        <label>Username:</label> 
        <input
          id="username"
          className="login"
          type="text"
          placeholder="Username"
          onChange={(e) => usernameOnChange(e.target.value)}
        />

        <label>Password:</label> 
        <input
          id="password"
          className="login"
          type="password"
          placeholder="Password"
          onChange={(e) => passwordOnChange(e.target.value)}
        />

        <button
          type="submit"
          className="login"
          onClick={login}>
            Login
        </button> 
        
        <button id="oauth"
          type="submit"
          className="login">
            OAuth
        </button>
        <br/>
        <a href="/signup">click here to sign up</a>
      </form> 
    </div> 
  )
}

export default Login
