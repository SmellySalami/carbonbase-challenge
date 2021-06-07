import React, { useState } from "react";
import axios from "axios";

import "../styles/Form.css"

function CommentForm ({postID, author}){

  const [commentState, setCommentState] = useState(()=>{return {content:""}});

  async function submitHandler(e){
    e.preventDefault();

    console.log(commentState);
    let json = {postID: postID, content:commentState.content, author:author}
  
    try {
      const res = await axios.post("http://localhost:3001/comment", json, {
        headers: {'Content-Type': 'application/json'},
      });
      console.log("comment respose",res);
      setCommentState(res.data)
    } catch (error) {
      console.log(error.response)
    }
  }

  return(
    <form className="nice-form" onSubmit={submitHandler}>
      <div class="form-group">New Comment</div>
      <div className="form-group">
        <label htmlFor="content">Content:</label>
        <textarea type="text" name="content" id="new-comment"
          onChange={e => setCommentState({...commentState, content:e.target.value})}
          value={commentState.content}
        />
      </div>
      <input type="submit" value="Post"/>
    </form>
  )
}
    
export default CommentForm;
