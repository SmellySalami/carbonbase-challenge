import { useEffect, useState } from "react";
import axios from "axios";

import Comment from "./Comment"

function CommentList ({postID}){

    const [commentList, setCommentList] = useState(()=>{return [];});

    // basically on load
    useEffect(() => {
        const fetchData = (async () => {
          const res = await axios.get(`http://localhost:3001/comment/${postID}`);
          setCommentList(res.data);
          console.log(commentList);
        });

        fetchData();
    }, []);

    return(
        commentList.map((comment, i) => {
            return (
              <Comment key={'comment-'+i} id={comment._id} author={comment.author} content={comment.content}/>
            )
        })
    )
  }
    
  export default CommentList;