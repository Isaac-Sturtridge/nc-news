import { useEffect, useState } from "react";
import { getComments } from "../utils/axios";
import Comment from "./Comment";
import AddNewComment from "./AddNewComment";

const CommentList = ({article, setArticle}) => {
    const [comments, setComments] = useState([])
    const {comment_count, article_id} = article

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
            <AddNewComment setComments={setComments} article_id={article_id} article={article} setArticle={setArticle}/>
            <p>Comment Count: {comment_count}</p>
            <h2>Comments</h2>
            {comments.map((comment) => {
                return <Comment article={article} setArticle={setArticle} setComments={setComments} comment={comment} key={comment.comment_id}/>
            })}
        </section>
    )
}

export default CommentList;