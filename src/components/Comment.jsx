import { useContext, useEffect, useRef, useState } from "react";
import { loggedInUserContext } from "../context/loggedInUserContext";
import { deleteComment } from "../utils/axios";

const Comment = ({comment, setComments, article, setArticle}) => {
    const {author, body, created_at, votes, comment_id } = comment;
    const {user, setUser} = useContext(loggedInUserContext)
    const [deleteButtonClicked, setDeleteButtonClicked] = useState(false)
    const firstRender = useRef(true)

    function handleChange() {
        setDeleteButtonClicked(!deleteButtonClicked)
    }

    useEffect(() => {
        if(!firstRender.current) {
            setComments((currComments) => {
                console.log(currComments)
                const newComments = []
                currComments.forEach((comment) => {
                    if(comment.comment_id !== comment_id) {
                        newComments.push(comment)  
                    }
                })
                console.log(newComments)
                return newComments
            })
            setArticle((currArticle) => {
               return currArticle, currArticle.comment_count - 1
            })
            deleteComment(comment_id)
        } else {
            firstRender.current = false
        }

    }, [deleteButtonClicked])

    return (
        <article className="comment">
        <h3>{author}</h3>
        <p>{body}</p>
        <p>Created_at: {created_at ? created_at : Date.now()}</p>
        <p>Votes: {votes ? votes : 0}</p>
        {author === user.username ? 
            <button onClick={handleChange}>Delete Comment</button>
            : ''
        }
        </article>
    )
}

export default Comment;