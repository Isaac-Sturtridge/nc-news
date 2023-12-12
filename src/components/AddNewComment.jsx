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
    setNewComment({
        ...newComment,
        body: ''
    })
  }

  useEffect(() => {
    if (!firstRender.current) {
    console.log(finishedComment)
      postComment(article_id, finishedComment)
        .then((response) => {
          return response.data;
        })
        .then((data) => {
          setComments((currComments) => {
            return [...currComments, data.comment];
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
        <button>Submit comment</button>
      </label>
    </form>
  );
};

export default AddNewComment;
