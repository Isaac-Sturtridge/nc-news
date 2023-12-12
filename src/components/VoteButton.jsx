import { useState } from "react";
import { patchArticle } from "../utils/axios";

const VoteButton = ({ votes, article_id }) => {
  const [viewVotes, setViewVotes] = useState(votes);

  function increaseVotes() {
    setViewVotes(viewVotes + 1);
    patchArticle(article_id, 1)
    .catch((err) => {
        // a bit difficult to test for this I think but this should update visually if the server goes down
        // the visual component update in this catch block should be replaced by a real error handler when doing task 12
        setViewVotes(err)
    });
  }

  function decreaseVotes() {
    setViewVotes(viewVotes - 1);
    patchArticle(article_id, -1)
    .catch((err) => {
        setViewVotes(err)
    });
  }

  return (
    <section className="votingBooth">
      <button onClick={increaseVotes}>Upvote</button>
      {viewVotes}
      <button onClick={decreaseVotes}>Downvote</button>
    </section>
  );
};

export default VoteButton;
