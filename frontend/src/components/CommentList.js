import { useEffect, useState } from "react";
import axios from "axios";

import Comment from "./Comment"

function CommentList ({postID}){

    const [commentList, setCommentList] = useState(()=>{return [];});
    const [counter, setCounter] = useState(()=>{return 0});

    // short polling comments
    useEffect(() => {
      const interval = setInterval(() => {
        setCounter(counter => (counter + 1)%10);
      }, 5000);
      return () => clearInterval(interval);
    }, []);

    // basically on load
    useEffect(() => {
        const fetchData = (async () => {
          const res = await axios.get(`http://localhost:3001/comment/${postID}`);
          setCommentList(res.data);
          console.log("comments", commentList);
        });

        fetchData();
    }, [counter]);

    return(
        commentList.map((comment, i) => {
            return (
              <Comment key={'comment-'+i} id={comment._id} author={comment.author} content={comment.content}/>
            )
        })
    )
  }
    
  export default CommentList;