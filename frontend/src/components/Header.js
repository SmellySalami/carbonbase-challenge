import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Header(props) {

  // useEffect(()=>{
  //   console.log(props)
  // });


  return (
    <div className="header">
      <Link to="/" className="header-logo">
        Carbonbase.earth
      </Link>
      <div className="header-user">
        { props.currUser ? (
            "hi, " + props.currUser
          ) : (
            <>
              <Link to="/signin" className="header-logo">
                signin
              </Link>
              <Link to="/signup" className="header-logo">
                signup
              </Link>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Header;