import React from "react";
import { useHistory } from "react-router-dom";

import "../styles/List.css"

function Post(props){

  const history = useHistory()


  function onClickPost()  {
    history.push(`/post/${props.id}`);
    console.log()
  }
  return(
    <div className="list-item" id={props.id} onClick={onClickPost}>POST: {props.title}</div>
  )
}
  
export default Post;