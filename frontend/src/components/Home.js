import React from "react"

import PostForm from "./PostForm"
import PostList from "./PostList"

function Home({currUser}){

  // TODO: refresh button for posts lol

  return(
    currUser ? (
      <div className="home">
          <PostForm currUser={currUser}/>
          <PostList />
          <div>
              <div>stats</div>
              <div>invite link (of the company)</div>
          </div>
      
      </div>
    ) : (
      ""
    )
  )
}

// <div>(nothing if not logged in) bunch  ol post (clicking goes to actual post, redirect)</div>
  
export default Home;