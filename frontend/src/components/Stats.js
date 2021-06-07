import {useState, useEffect} from "react";
import axios from "axios";

import "../styles/Home.css"

function Stats(){

  const [statsState, setstatsState] = useState(()=>{
    return null
  });

  // basically on load
  useEffect(() => {
    const fetchData = (async () => {
      const res = await axios.get(`http://localhost:3001/stats/`);
      setstatsState(res.data);
    });

    fetchData();
  }, []);

  return (

      (statsState) ? (
        <div>
          <div className="side-bar-item">comments in last 7 days: {statsState.comments}</div>
          <div className="side-bar-item">active posts: {statsState.posts}</div>
        </div>
      ) : (
        <div>Loading statistics.</div>
      )

  )
}

export default Stats;