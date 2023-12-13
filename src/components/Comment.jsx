import { useContext, useEffect, useRef, useState } from "react";
import { loggedInUserContext } from "../context/loggedInUserContext";
import { deleteComment } from "../utils/axios";

const Comment = ({comment, comments, setComments, setArticle}) => {
    const {author, body, created_at, votes, comment_id } = comment;
    const {user, setUser} = useContext(loggedInUserContext)
    const [deleteButtonClicked, setDeleteButtonClicked] = useState(false)
    const firstRender = useRef(true)
    const [err, setErr] = useState(null)
    const [currentCommentSaveState, setCurrentCommentSaveState] = useState(comments);
    const [sendingDeleteRequest, setSendingDeleteRequest] = useState(false)

    function handleChange() {
        setDeleteButtonClicked(!deleteButtonClicked)
    }

    useEffect(() => {
        if(!firstRender.current) {
            setComments((currComments) => {
                const newComments = []
                currComments.forEach((comment) => {
                    if(comment.comment_id !== comment_id) {
                        newComments.push(comment)  
                    }
                })
                return newComments
            })
            setSendingDeleteRequest(true)
            setArticle((currArticle) => {
                currArticle.comment_count = currArticle.comment_count - 1
                return currArticle
            })
            deleteComment(comment_id)
            .then(() => {
                setSendingDeleteRequest(false)
            })
            .catch((err) => {
                setArticle((currArticle) => {
                    currArticle.comment_count = currArticle.comment_count + 1
                    return currArticle
                })
                setComments(currentCommentSaveState)
                setSendingDeleteRequest(false)
                setErr("Something went wrong, please try again.")
            })
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
        {err ? <p>{err}</p> : ''}
        {sendingDeleteRequest ? <p>Sending delete request. Please wait...</p> : ""}
        {author === user.username ? 
            <button onClick={handleChange}>Delete Comment</button>
            : ''
        }
        </article>
    )
}

export default Comment;