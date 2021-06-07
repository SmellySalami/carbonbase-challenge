function Comment ({content, author}){

  return(
    <div className="comment">
      <div>{author} says: "{content}"</div>
    </div>
  )
}
  
export default Comment;