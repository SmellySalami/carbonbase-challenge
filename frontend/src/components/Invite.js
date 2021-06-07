import {useState, useEffect} from "react";
import axios from "axios";

function Invite(){

  const [inviteCode, setInviteCode] = useState(()=>{
    return null
  });

  // onload, get invite code
  useEffect(() => {
    const fetchData = (async () => {
      const res = await axios.get(`http://localhost:3001/invite/`);
      setInviteCode(res.data[0].code);
    });

    fetchData();
  }, []);

  return (
    (inviteCode) ? (
      <div className="side-bar-item">Invite your coworkers with: [ {inviteCode} ]</div>
    ) : (
      <div>Loading invitation.</div>
    )
  )
}

export default Invite;