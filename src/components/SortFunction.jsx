import { constructSearchParams } from "../utils/params";
import { useState } from "react";
import { Link } from "react-router-dom";

const SortFunction = ({ setSearchParams, searchParams }) => {
  let [queryString, setQueryString] = useState(`?order=desc&${searchParams.topic ? `topic=${searchParams.topic}&` : ''}`)
  
  function handleAsc() {
    setQueryString(`?order=asc&${searchParams.topic ? `topic=${searchParams.topic}&` : ''}`)
  }
  
  function handleDesc() {
    setQueryString(`?order=desc&${searchParams.topic ? `topic=${searchParams.topic}&` : ''}`)
  }

  function handleSubmit(event) {
    setSearchParams(constructSearchParams(event.target.parentElement.search));
  }

  return (
    <section>
      <h3>Sort By:</h3>
      <section className="sortBy">
      <Link to={`/articles${queryString? queryString: '?'}sort_by=created_at`} onClick={handleSubmit}><p>Date</p></Link>
      <Link to={`/articles${queryString? queryString: '?'}sort_by=comment_count`} onClick={handleSubmit}><p>Comment Count</p></Link>
      <Link to={`/articles${queryString? queryString: '?'}sort_by=votes`} onClick={handleSubmit}><p>Votes</p></Link>
      <button type="button" onClick={handleAsc} value="asc">
        <p>Ascending</p>
      </button>
      <button type="button" onClick={handleDesc} value="desc">
        <p>Descending</p>
      </button>
      </section>
    </section>
  );
};

export default SortFunction;
