import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SigninForm(props) {

  const history = useHistory()
  //on click, check succ, error, set user, redirect
  function submitHandler (e) {
    e.preventDefault();
    console.log("sumbitting");
    // make axios call, TO CHECK
    history.push('/');

  }

  return (
    <form className="signin-form" onSubmit={submitHandler}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="login-email"/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="login-password"/>
      </div>
      <input type="submit" value="signin"/>
    </form>
  )
}

export default SigninForm;