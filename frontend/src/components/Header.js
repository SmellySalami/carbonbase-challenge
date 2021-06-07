import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Header(props) {

  // useEffect(()=>{
  //   console.log(props)
  // });

  const history = useHistory()

  async function signOut() {

    try {
      const res = await axios.post("http://localhost:3001/auth/signout", props.currUser, {
        headers: {'Content-Type': 'application/json'},
      });
      // console.log("signing out");
      console.log(res);
      props.setCurrUser(null);
      history.push("/");
            
    } catch (error) {
      console.log(error.response);
    }
  }


  return (
    <div className="header">
      <Link to="/" className="header-logo">
        Carbonbase.earth
      </Link>
      <div className="header-user">
        { props.currUser ? (
          <>
            {"hi, " + props.currUser.name}
            <div onClick={signOut}>[SIGN OUT]</div>
          </>
          ) : (
            <>
              <Link to="/signin" className="header-logo">
                [SIGN IN]
              </Link>
              <Link to="/signup" className="header-logo">
                [SIGN UP]
              </Link>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Header;