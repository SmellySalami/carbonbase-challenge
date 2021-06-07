import {useState, useEffect} from "react";
import {useParams} from 'react-router-dom';
import axios from "axios";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

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
          <div>
            <div>I'm a post. my Id is {id}</div>
            <div>{postData.title}</div>
            <div>{postData.content}</div>
            <div>{postData.author}</div>
            <CommentForm postID={id} author={currUser.name}/>
            <CommentList postID={id}/>
          </div>
        ) : (
          <div>Loading full post. Login while you wait</div>
        )}
      </div>


    )
}

{/* <div>{id}</div>
<div>{postData.title}</div>
<div>{postData.content}</div>
<div>[create new comment]</div>       */}

export default Post;