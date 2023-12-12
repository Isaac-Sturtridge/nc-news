import { useState } from "react";
import { patchArticle } from "../utils/axios";

const VoteButton = ({ votes, article_id }) => {
  const [viewVotes, setViewVotes] = useState(votes);

  function increaseVotes() {
    setViewVotes(viewVotes + 1);
    patchArticle(article_id, 1);
  }

  function decreaseVotes() {
    setViewVotes(viewVotes - 1);
    patchArticle(article_id, -1);
  }

  return (
    <section>
      <button onClick={increaseVotes}>Upvote</button>
      {viewVotes}
      <button onClick={decreaseVotes}>Downvote</button>
    </section>
  );
};

export default VoteButton;
