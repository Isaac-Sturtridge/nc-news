import { useEffect, useState } from "react";
import { getComments } from "../utils/axios";

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
            <h1>Comments</h1>
        </section>
    )
}

export default CommentList;