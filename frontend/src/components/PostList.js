import React, { useEffect, useState } from "react";
import axios from "axios";

import PostFormItem from "./PostFormItem"

function PostList(){

  const [postList, setPostList] = useState(()=>{return [];});

  // basically on load
  useEffect(() => {
    const fetchData = (async () => {
      const res = await axios.get("http://localhost:3001/post");
      setPostList(res.data);
    });

    fetchData();
  }, []);


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