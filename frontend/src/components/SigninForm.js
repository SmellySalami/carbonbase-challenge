import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function SigninForm(props) {

  const [details, setDetails] = useState(()=>{return {email:"", password:""}});
  const [error, setError] = useState(()=>{return ""});

  const history = useHistory()
  //on click, check succ, error, set user, redirect
  async function submitHandler(e){
    e.preventDefault();

    // Check fields are present
    console.log(details);
    // make axios call, TO make new account
    try {
      const res = await axios.post("http://localhost:3001/auth/signin", details, {
        headers: {'Content-Type': 'application/json'},
      });
      // setError("");
      props.setCurrUser(res.data)
      console.log(res)
          // on success
      history.push('/');
    } catch (error) {
      console.log(error.response)
      setError(error.response.data)
    }
  }

  return (
    <form className="signin-form" onSubmit={submitHandler}>
      <h2>Login</h2>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="signup-email"
          onChange={e => setDetails({...details, email:e.target.value})}
          value={details.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="signup-password"
          onChange={e => setDetails({...details, password:e.target.value})}
          value={details.password}
        />
      </div>
      <input type="submit" value="signin"/>
    </form>
  )
}

export default SigninForm;