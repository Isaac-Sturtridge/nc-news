import { useContext, useEffect, useRef, useState } from "react";
import { loggedInUserContext } from "../context/loggedInUserContext";
import { postComment } from "../utils/axios";

const AddNewComment = ({ setComments, article_id, setArticle }) => {
  const { user, setUser } = useContext(loggedInUserContext);
  const [newComment, setNewComment] = useState({
    username: user.username,
    body: ""
  });
  const [finishedComment, setFinishedComment] = useState({});
  const [err, setErr] = useState(null);
  const [isSubmittingComment, setIsSubmittingComment] = useState(false)
  const firstRender = useRef(true);

  function handleChange(event) {
    setNewComment({
      ...newComment,
      body: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if(newComment.body.length === 0) {
      setErr("You cannot submit an empty comment")
    } else {
      setErr(null)
      setFinishedComment(newComment)
      setNewComment({
          ...newComment,
          body: ''
      })
    }
  }

  useEffect(() => {
    if (!firstRender.current) {
      setIsSubmittingComment(true)
      setArticle((currArticle) => {
         currArticle.comment_count = currArticle.comment_count + 1
         return currArticle
     })
      postComment(article_id, finishedComment)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          setComments((currComments) => {
            const newComments = [...currComments]
            return [data.comment, ...newComments];
          });
        })
        .then(() => {
          setIsSubmittingComment(false)
        })
        .catch((err) => {
          setErr("Something went wrong. Please try again.")
        })
    } else {
      firstRender.current = false;
    }
  }, [finishedComment]);

  if(isSubmittingComment) {
    return(
      <p>Sending comment to server. Please wait...</p>
    )
  }

  return (
    <form className="addNewComment" onSubmit={handleSubmit}>
      {err ? <p>{err}</p> : ''}
      <label htmlFor="addComment form-label">
        <input
        className="form-control"
          type="text"
          placeholder="Add your comment here"
          name="body"
          id="addComment"
          value={newComment.body}
          onChange={handleChange}
        />
      </label>
    <button className="btn btn-outline-success">Submit comment</button>
    </form>
  );
};

export default AddNewComment;
