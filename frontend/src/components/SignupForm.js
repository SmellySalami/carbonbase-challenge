import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "../styles/Form.css";

function SignupForm(props) {

  const history = useHistory();

  const [details, setDetails] = useState(()=>{return {name:"", email:"", password:"", invite:""}});
  const [error, setError] = useState(()=>{return ""})

  async function submitHandler(e){
    e.preventDefault();

    // Check fields are present
    console.log(details);
    // make axios call, TO make new account
    try {
      const res = await axios.post("http://localhost:3001/auth/signup", details, {
        headers: {'Content-Type': 'application/json'},
      });
      setError("");
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
    <form className="nice-form" onSubmit={submitHandler}>
      <div class="form-group">Sign Up</div>
      <div className="form-group">{error}</div>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input type="name" name="name" id="signup-name" 
          onChange={e => setDetails({...details, name:e.target.value})}
          value={details.name}
        />
      </div>
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
      <div className="form-group">
        <label htmlFor="invite">Invitation Code (if applicable):</label>
        <input type="text" name="invite" id="signup-invite"
          onChange={e => setDetails({...details, invite:e.target.value})}
          value={details.invite}
        />
      </div>
      <input className="form-group" type="submit" value="sign up"/>
    </form>
  )
  
}

export default SignupForm;