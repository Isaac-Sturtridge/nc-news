import { useEffect, useState } from "react";
import { getComments } from "../utils/axios";
import Comment from "./Comment";
import AddNewComment from "./AddNewComment";

const CommentList = ({ article, setArticle }) => {
  const [comments, setComments] = useState([]);
  const { comment_count, article_id } = article;
  const [showComments, setShowComments] = useState(false)

  useEffect(() => {
    getComments(article_id)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setComments(data.comments);
      });
  }, []);

  function handleShowComments() {
    setShowComments(!showComments)
  }

  return (
    <section className="comments">
      <AddNewComment
        setComments={setComments}
        article_id={article_id}
        setArticle={setArticle}
      />
      <h2>Comments</h2>
      <button className="btn btn-primary" onClick={handleShowComments}>{showComments ? "Hide" : "Show"} comments</button>
      {showComments ? <section id="comment-list">
        <p>Total comments: {comment_count}</p>
        {comments.map((comment) => {
          return (
            <Comment
              setArticle={setArticle}
              comments={comments}
              setComments={setComments}
              comment={comment}
              key={comment.comment_id}
            />
          );
        })}
      </section> : null}
    </section>
  );
};

export default CommentList;
