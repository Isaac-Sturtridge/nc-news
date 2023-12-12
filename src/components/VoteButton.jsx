import { useState } from "react";
import { patchArticle } from "../utils/axios";

const VoteButton = ({ votes, article_id }) => {
  const [viewVotes, setViewVotes] = useState(votes);
  const [hasUpvoted, setHasUpvoted] = useState(false);
  const [hasDownvoted, setHasDownvoted] = useState(false);
  const [err, setErr] = useState(null);

  function increaseVotes() {
    let inc_votes = hasDownvoted ? 2 : 1
    setErr(null)
    if(!hasUpvoted) {
        setHasUpvoted(true)
        setHasDownvoted(false)
        setViewVotes(viewVotes + inc_votes);
        patchArticle(article_id, inc_votes)
        .catch((err) => {
            setErr("Something went wrong, please try again.")
        });
    } else {
        setHasUpvoted(false)
        setViewVotes(viewVotes - inc_votes)
        patchArticle(article_id, -inc_votes)
        .catch((err) => {
          setErr("Something went wrong, please try again.")
        });
    }
  }

  function decreaseVotes() {
    let inc_votes = hasUpvoted ? 2 : 1
    setErr(null)
    if(!hasDownvoted) {
        setHasDownvoted(true)
        setHasUpvoted(false)
        setViewVotes(viewVotes - inc_votes);
        patchArticle(article_id, -inc_votes)
        .catch((err) => {
          setErr("Something went wrong, please try again.")
        });
    } else {
        setHasDownvoted(false)
        setViewVotes(viewVotes + inc_votes)
        patchArticle(article_id, inc_votes)
        .catch((err) => {
          setErr("Something went wrong, please try again.")
        });
    }
  }

  return (
    <section className="votingBooth">
      {err ? <p>{err}</p> : ""}
      <button onClick={increaseVotes}>{hasUpvoted ? "Undo 👍" : "👍"}</button>
      {viewVotes}
      <button onClick={decreaseVotes}>{hasDownvoted ? "Undo 👎" : "👎"}</button>
    </section>
  );
};

export default VoteButton;
