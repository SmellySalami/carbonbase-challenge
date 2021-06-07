import React, { useEffect, useState } from "react";
import axios from "axios";

import PostFormItem from "./PostFormItem"

function PostList(){

  const [postList, setPostList] = useState(()=>{return [];});
  const [counter, setCounter] = useState(()=>{return 0});

  // short polling posts
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => (counter + 1)%10);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // basically on load
  useEffect(() => {
    const fetchData = (async () => {
      const res = await axios.get("http://localhost:3001/post");
      setPostList(res.data);
      console.log("posts", postList);
    });

    fetchData();
  }, [counter]);


  // TODO: onclick to redirect to complete post
  return(
    postList.map((post, i) => {
        return (
          <PostFormItem key={'post-'+i} id={post._id} title={post.title}/>
        )
    })
  )
}

export default PostList;