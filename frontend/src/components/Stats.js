import {useState, useEffect} from "react";
import axios from "axios";

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
    <div>
      {(statsState) ? (
        <div>
          <div>comments in last 7 days: {statsState.comments}</div>
          <div>active posts: {statsState.posts}</div>
        </div>
      ) : (
        <div>Loading statistics.</div>
      )}
    </div>
  )
}

export default Stats;