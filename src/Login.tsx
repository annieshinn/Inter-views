import React from "react"

const Login = () => {

  return (
    <div className="formContainer"> 
      <form> 
        <label>Username:</label> 
        <input id="username" className="login" type="text" placeholder="Username" />

        <label>Password:</label> 
        <input id="password" className="login" type="password" placeholder="Password" />

        <button type="submit" className="login">Login</button> 
        
        <button id="oauth" type="submit" className="login">OAuth</button> 
      </form> 
    </div> 
  )
}

export default Login
