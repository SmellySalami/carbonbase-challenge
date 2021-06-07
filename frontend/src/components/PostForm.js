import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "../styles/Form.css"

function PostForm({currUser}) {

  const history = useHistory()

  const [newPostInfo, setNewPostInfo] = useState(()=>{return {title:"", content:""}});
  // const [error, setError] = useState(()=>{return ""});

  //make new post req to backend
  async function submitHandler(e){
    e.preventDefault();
    let json = {author:currUser.name, title: newPostInfo.title, content:newPostInfo.content}
    try {
      const res = await axios.post("http://localhost:3001/post/", json, {
        headers: {'Content-Type': 'application/json'},
      });
      history.push("/post/"+res.data._id);
    } catch (error) {
      console.log(error.response);
      // setError(error.response.data)
    }
  }

  return (
    <form className="post-form" onSubmit={submitHandler}>
      <div className="form-group">New Post</div>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="new-post-title"
          onChange={e => setNewPostInfo({...newPostInfo, title:e.target.value})}
          value={newPostInfo.title}
        />
        <label htmlFor="body">Content:</label>
        <textarea type="email" name="email" id="signup-email"
          onChange={e => setNewPostInfo({...newPostInfo, content:e.target.value})}
          value={newPostInfo.content}
        />
      </div>
      <input className="form-group" type="submit" value="Post"/>
    </form>
  )
}

export default PostForm;