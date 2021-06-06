import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SignupForm(props) {

  const history = useHistory()

  function submitHandler(e){
    e.preventDefault();
    console.log("sumbitting");
    // make axios call, TO make new account

    // on success
    history.push('/');
  }

  return (
    <form className="signin-form" onSubmit={submitHandler}>
      <h2>Sign Up</h2>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="name" name="name" id="signup-name"/>
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="signup-email"/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="signup-password"/>
      </div>
      <div className="form-group">
        <label htmlFor="invite">Invitation Code (if applicable):</label>
        <input type="text" name="invite" id="signup-invite"/>
      </div>
      <input type="submit" value="signin"/>
    </form>
  )
  
}

export default SignupForm;