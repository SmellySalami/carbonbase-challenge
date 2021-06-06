import React from "react"

function Post(props){
  return(
    <div id={props.id}>POST: {props.title}</div>
  )
}
  
export default Post;