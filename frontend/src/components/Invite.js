import {useState, useEffect} from "react";
import axios from "axios";

function Invite(){

  const [inviteCode, setInviteCode] = useState(()=>{
    return null
  });

  // basically on load
  useEffect(() => {
    const fetchData = (async () => {
      const res = await axios.get(`http://localhost:3001/invite/`);
      // console.log(res)
      setInviteCode(res.data[0].code);
    });

    fetchData();
  }, []);

  return (
    <div>
      {(inviteCode) ? (
        <div>
          <div>Invite your coworkers with: [ {inviteCode} ]</div>
        </div>
      ) : (
        <div>Loading invitation.</div>
      )}
    </div>
  )
}

export default Invite;