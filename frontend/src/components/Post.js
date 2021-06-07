import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

import "../styles/Post.css";

function Post({currUser}){

    const {id} = useParams()
    const [postData, setPostData] = useState(()=>{
      return null
    })

    // basically on load
    useEffect(() => {
      const fetchData = (async () => {
        console.log(id);
        const res = await axios.get(`http://localhost:3001/post/${id}`);
        console.log(res)
        setPostData(res.data);
        console.log(postData)
      });

      fetchData();
    }, []);

    return (
      <div>
        {(postData && currUser) ? (
          <div className="post-container">
            <div className="item title">Title: {postData.title}</div>
            <div className="item author">Author: {postData.author}</div>
            <div className="item content">{postData.content}</div>
            <CommentForm postID={id} author={currUser.name}/>
            <CommentList postID={id}/>
          </div>
        ) : (
          <div>Loading full post. Login while you wait</div>
        )}
      </div>


    )
}

export default Post;