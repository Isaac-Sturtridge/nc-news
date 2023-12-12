import { useContext, useEffect, useRef, useState } from "react";
import { loggedInUserContext } from "../context/loggedInUserContext";
import { postComment } from "../utils/axios";

const AddNewComment = ({ setComments, article_id }) => {
  const { user, setUser } = useContext(loggedInUserContext);
  const [newComment, setNewComment] = useState({
    username: user.username,
    body: ""
  });
  const [finishedComment, setFinishedComment] = useState({});
  const firstRender = useRef(true);

  function handleChange(event) {
    setNewComment({
      ...newComment,
      body: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFinishedComment(newComment)
    // optimistically render this first
    setComments((currComments) => {
      finishedComment.key = "new temporary comment"
        return [finishedComment, ...currComments]
    })
    setNewComment({
        ...newComment,
        body: ''
    })
  }

  useEffect(() => {
    if (!firstRender.current) {
      postComment(article_id, finishedComment)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          setComments((currComments) => {
            const newComments = [...currComments]
            console.log(data.comment, "new data")
            newComments.pop()
            return [...newComments, data.comment];
          });
        });
    } else {
      firstRender.current = false;
    }
  }, [finishedComment]);

  return (
    <form className="addNewComment" onSubmit={handleSubmit}>
      <label htmlFor="addComment">
        Add new comment:
        <input
          type="text"
          placeholder="Add your comment here"
          name="body"
          id="addComment"
          value={newComment.body}
          onChange={handleChange}
        />
      </label>
    <button>Submit comment</button>
    </form>
  );
};

export default AddNewComment;
