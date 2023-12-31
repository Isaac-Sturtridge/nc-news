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
            setViewVotes(viewVotes)
            setHasUpvoted(false)
            if(inc_votes === 2) {
              setHasDownvoted(true)
            }
            setErr("Something went wrong, please try again.")
        });
    } else {
        setHasUpvoted(false)
        setViewVotes(viewVotes - inc_votes)
        patchArticle(article_id, -inc_votes)
        .catch((err) => {
          setViewVotes(viewVotes)
          setHasUpvoted(true)
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
          setViewVotes(viewVotes)
          setHasDownvoted(false)
          if(inc_votes === 2) {
            setHasUpvoted(true)
          }
          setErr("Something went wrong, please try again.")
        });
    } else {
        setHasDownvoted(false)
        setViewVotes(viewVotes + inc_votes)
        patchArticle(article_id, inc_votes)
        .catch((err) => {
          setViewVotes(viewVotes)
          setHasDownvoted(true)
          setErr("Something went wrong, please try again.")
        });
    }
  }

  return (
    <section className="votingBooth">
      {err ? <p>{err}</p> : ""}
      <button className="btn btn-outline-primary" onClick={increaseVotes}>{hasUpvoted ? "Undo 👍" : "👍"}</button>
      {viewVotes}
      <button className="btn btn-outline-primary" onClick={decreaseVotes}>{hasDownvoted ? "Undo 👎" : "👎"}</button>
    </section>
  );
};

export default VoteButton;
