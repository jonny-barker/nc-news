import { convertDate } from "../utils"
export default function Comment ({ comment }) {
  return (
    <div>
      <h4>{comment.author}</h4>
      <h4>Written {convertDate(comment.created_at)}</h4>
      <p>{comment.body}</p>
    </div>
  )
}