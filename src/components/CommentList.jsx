import { useEffect, useState } from "react";
import { getComments } from "../utils/axios";

const CommentList = () => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments
        .then((response) => {
            return response.data
        })
        .then((data) => {
            console.log(data)
            setComments(data.comments)
        })
    })

    return (
        <section className="comments">

        </section>
    )
}

export default CommentList;