import React from "react"
import Invite from "./Invite";

import PostForm from "./PostForm";
import PostList from "./PostList";
import Stats from "./Stats";

function Home({currUser}){

  // TODO: refresh button for posts lol

  return(
    currUser ? (
      <div className="home">
          <div className="post-container">
            <PostForm currUser={currUser}/>
            <PostList />
          </div>
          <div className="side-bar">
              <Stats/>
              <Invite/>
          </div>
      
      </div>
    ) : (
      ""
    )
  )
}

// <div>(nothing if not logged in) bunch  ol post (clicking goes to actual post, redirect)</div>
  
export default Home;