import { useEffect, useState } from "react";
import { getComments } from "../utils/axios";
import Comment from "./Comment";
import AddNewComment from "./AddNewComment";

const CommentList = ({article_id, comment_count}) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments(article_id)
        .then((response) => {
            return response.data
        })
        .then((data) => {
            setComments(data.comments)
        })
    }, [])

    return (
        <section className="comments">
            <AddNewComment setComments={setComments} article_id={article_id}/>
            <p>Comment Count: {comment_count + comments.length - 10}</p>
            <h2>Comments</h2>
            {comments.map((comment) => {
                return <Comment setComments={setComments} comment={comment} key={comment.comment_id}/>
            })}
        </section>
    )
}

export default CommentList;