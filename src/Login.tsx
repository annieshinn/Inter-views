import React from "react"

const Login = () => {

  return (
    <div className="formContainer"> 
      <form> 
        <label> 
          Username:
          <input id="username" className="login" type="text" placeholder="Username" /> 
        </label> 
        <label> 
          Password:
          <input id="password" className="login" type="password" placeholder="Password" /> 
        </label> 
        <button type="submit" className="login"> Login </button> 
        <button id="oauth" type="submit" className="login" > Oauth </button> 
      </form> 
    </div> 
  )
}

export default Login
