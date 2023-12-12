import { useEffect, useState } from "react";
import { getComments } from "../utils/axios";
import Comment from "./Comment";
import AddNewComment from "./AddNewComment";

const CommentList = ({article_id}) => {
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
            <AddNewComment setComments={setComments}/>
            <h2>Comments</h2>
            {comments.map((comment) => {
                return <Comment comment={comment} key={comment.comment_id}/>
            })}
        </section>
    )
}

export default CommentList;