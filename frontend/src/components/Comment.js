import "../styles/List.css"

function Comment ({content, author}){

  return(
    <div className="comment list-item small">
      <div>{author} says: "{content}"</div>
    </div>
  )
}
  
export default Comment;