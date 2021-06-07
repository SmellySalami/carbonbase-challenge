import axios from "axios";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import '../styles/Header.css';

function Header(props) {
  const history = useHistory()

  // send signout request to backend
  async function signOut() {
    try {
      const res = await axios.post("http://localhost:3001/auth/signout", props.currUser, {
        headers: {'Content-Type': 'application/json'},
      });
      props.setCurrUser(null);
      history.push("/");
            
    } catch (error) {
      console.log(error.response);
    }
  }

  return (
    <div className="carbon-header">
      <div>
        <Link to="/" className="header-logo">
          Carbonbase.earth
        </Link>
      </div>
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