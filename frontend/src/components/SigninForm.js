import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "../styles/Form.css";

function SigninForm(props) {

  const [details, setDetails] = useState(()=>{return {email:"", password:""}});
  const [error, setError] = useState(()=>{return ""});
  const history = useHistory()

  //send signin req to backend
  async function submitHandler(e){
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3001/auth/signin", details, {
        headers: {'Content-Type': 'application/json'},
      });
      setError("");
      props.setCurrUser(res.data)
      history.push('/');
    } catch (error) {
      console.log(error.response)
      setError(error.response.data)
    }
  }

  return (
    <form className="nice-form" onSubmit={submitHandler}>
      <div class="form-group">Sign In</div>
      <div className="form-group">{error}</div>
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
      <input className="form-group" type="submit" value="signin"/>
    </form>
  )
}

export default SigninForm;