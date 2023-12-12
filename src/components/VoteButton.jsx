import { useState } from "react";
import { patchArticle } from "../utils/axios";

const VoteButton = ({ votes, article_id }) => {
  const [viewVotes, setViewVotes] = useState(votes);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [hasDownvoted, setHasDownvoted] = useState(false);

  function increaseVotes() {
    let inc_votes = hasDownvoted ? 2 : 1
    if(!hasUpvoted) {
        setHasUpvoted(true)
        setHasDownvoted(false)
        setViewVotes(viewVotes + inc_votes);
        patchArticle(article_id, inc_votes)
        .catch((err) => {
            // a bit difficult to test for this I think but this should update visually if the server goes down
            // the visual component update in this catch block should be replaced by a real error handler when doing task 12
            setViewVotes(err)
        });
    } else {
        setHasUpvoted(false)
        setViewVotes(viewVotes - inc_votes)
        patchArticle(article_id, -inc_votes)
        .catch((err) => {
            setViewVotes(err)
        });
    }
  }

  function decreaseVotes() {
    let inc_votes = hasUpvoted ? 2 : 1
    if(!hasDownvoted) {
        setHasDownvoted(true)
        setHasUpvoted(false)
        setViewVotes(viewVotes - inc_votes);
        patchArticle(article_id, -inc_votes)
        .catch((err) => {
            setViewVotes(err)
        });
    } else {
        setHasDownvoted(false)
        setViewVotes(viewVotes + inc_votes)
        patchArticle(article_id, inc_votes)
        .catch((err) => {
            setViewVotes(err)
        });
    }
  }

  return (
    <section className="votingBooth">
      <button onClick={increaseVotes}>{hasUpvoted ? "Undo upvote" : "Upvote"}</button>
      {viewVotes}
      <button onClick={decreaseVotes}>{hasDownvoted ? "Undo downvote" : "Downvote"}</button>
    </section>
  );
};

export default VoteButton;
