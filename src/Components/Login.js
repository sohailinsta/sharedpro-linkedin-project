import React, { useState } from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function clickHandler (e) {
        setEmail(e.target.value);
    }
    function clickSandler (e) {
        setPassword(e.target.value);
    }
    function SignIn (e) {
        e.preventDefault();
    }

    function register (e){
        e.preventDefault();
        }
  return (
  <div className="login">
      <Link to="/">
      <img className="login__logo" 
      src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"/>
      </Link>
      <div className="login__container">
          <h1>Sign-in</h1>
          <form>
              <h5>E-mail </h5>
              <input type="text" value={email} onChange={clickHandler}/>
              <h5>Password</h5>
              <input type="password" value={password} onChange={clickSandler}/>
          </form>
          <Link to="/">
          <div className="link-background-sign-in">
          <button type='submit' onClick={SignIn} className="signIn__button">
           Sign In</button>
           </div>
           </Link>
          <p>   
          By Signing-in you agree to Linkedin conditions 
          of Use. please see our privacy notice
          </p>
         <button onClick={register} className="login__registerbutton">Create Your Linkedin Account</button>
         </div>
         </div>
  )
}

export default Login;
