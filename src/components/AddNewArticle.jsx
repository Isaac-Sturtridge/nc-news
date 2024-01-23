import { useContext, useState } from "react";
import { loggedInUserContext } from "../context/loggedInUserContext";

const AddNewArticle = () => {
  const { user, setUser } = useContext(loggedInUserContext);
  const [newArticle, setNewArticle] = useState({
    author: user.username,
    title: "",
    topic: "",
    body: "",
  });
  const [err, setErr] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (newArticle.body.length === 0) {
      setErr("You cannot submit an empty article");
    } else {
      setErr(null);
      setFinishedComment(newComment);
      setNewArticle({
        ...newArticle,
        author: user.username,
        title: "",
        topic: "",
        body: "",
      });
    }
  }

  function handleBodyChange(event) {
    setNewArticle({
      ...newArticle,
      body: event.target.value,
    });
  }

  function handleTopicChange(event) {
    setNewArticle({
      ...newArticle,
      topic: event.target.value,
    });
  }

  function handleTitleChange(event) {
    setNewArticle({
      ...newArticle,
      title: event.target.value,
    });
  }

  return (
    <form className="addNewArticle" onSubmit={handleSubmit}>
      {err ? <p>{err}</p> : ""}
      <label htmlFor="articleTitle form-label">
        Title:
        <input
          className="form-control"
          type="text"
          placeholder="Give it a good name!"
          name="title"
          id="articleTitle"
          size="100"
          value={newArticle.title}
          onChange={handleTitleChange}
        />
      </label>
      <label htmlFor="articleBody form-label">
        <textarea
          className="form-control"
          type="text"
          placeholder="Add the content of your article here"
          name="body"
          id="articleBody"
          rows="5"
          cols="100"
          value={newArticle.body}
          onChange={handleBodyChange}
        ></textarea>
      </label>
      <label htmlFor="articleTopic form-label">
        Topic:
        <input 
        className="form-control"
        type="text" 
        placeholder="Something cool, like coding"
        name="topic"
        id="articleTopic"
        size="100"
        value={newArticle.topic}
        onChange={handleTopicChange}/>
      </label>
      <button className="btn btn-outline-success" >Submit article</button>
    </form>
  );
};

export default AddNewArticle;
