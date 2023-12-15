import { constructSearchParams } from "../utils/params";
import { useState } from "react";
import { Link } from "react-router-dom";

const SortFunction = ({ setSearchParams, searchParams }) => {
  const { order = 'desc', topic, sort_by } = searchParams;
  let [queryString, setQueryString] = useState(
    `?order=desc&${topic ? `topic=${topic}&` : ""}`
  );
  const [orderClicked, setOrderClicked] = useState(null)
  const [sortByClicked, setSortByClicked] = useState(null)



  function handleAsc() {
    setOrderClicked('asc')
    setQueryString(
      `?order=asc&sort_by=${sort_by}&${topic ? `topic=${topic}&` : ""}`
    );
    setSearchParams((currParams) => {
      currParams.order = "asc";
      return currParams;
    });
  }

  function handleDesc() {
    setOrderClicked('desc')
    setQueryString(
      `?order=desc&sort_by=${sort_by}&${topic ? `topic=${topic}&` : ""}`
    );
    setSearchParams((currParams) => {
      currParams.order = "desc";
      return currParams;
    });
  }

  function handleDate() {
    setSortByClicked('created_at')
    setQueryString(
      `?order=${order}&sort_by=created_at&${topic ? `topic=${topic}&` : ""} `
    );
    setSearchParams((currParams) => {
      currParams.sort_by = "created_at";
      return currParams;
    });
  }

  function handleCommentCount() {
    setSortByClicked('comment_count')
    setQueryString(
      `?order=${order}&sort_by=comment_count&${topic ? `topic=${topic}&` : ""} `
    );
    setSearchParams((currParams) => {
      currParams.sort_by = "comment_count";
      return currParams;
    });
  }

  function handleVotes() {
    setSortByClicked('votes')
    setQueryString(
      `?order=${order}&sort_by=votes&${topic ? `topic=${topic}&` : ""} `
    );
    setSearchParams((currParams) => {
      currParams.sort_by = "votes";
      return currParams;
    });
  }

  function handleSubmit(event) {
    event.preventDefault()
    setSearchParams(constructSearchParams(`${queryString}`));
  }

  return (
    <section className="sortByContainer">
      <h3>Sort By:</h3>
      <form className="sortBy">
        <p>Choose your sort options: </p>
        <button type="button" className={`sort_option ${sortByClicked === 'created_at' ? 'clicked' : ''}`} onClick={handleDate}>
          Date
        </button>
        <button type="button" className={`sort_option ${sortByClicked === 'comment_count' ? 'clicked' : ''}`} onClick={handleCommentCount}>
          Comment Count
        </button>
        <button type="button" className={`sort_option ${sortByClicked === 'votes' ? 'clicked' : ''}`} onClick={handleVotes}>
          Votes
        </button>
        <button type="button" className={`sort_option ${orderClicked === 'asc' ? 'clicked' : ''}`} onClick={handleAsc} value="asc">
          Ascending
        </button>
        <button type="button" className={`sort_option ${orderClicked === 'desc' ? 'clicked' : ''}`} onClick={handleDesc} value="desc">
          Descending
        </button>
        <button type="submit" className="sort_submit" onClick={handleSubmit}>
          Submit Sort
        </button>
      </form>
    </section>
  );
};

export default SortFunction;
