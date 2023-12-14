import { Link } from "react-router-dom";

const SortFunction = ({ setQueryString, searchParams, setSearchParams }) => {

  function handleClick(event) {
    let params = Object.fromEntries(
      event.target.parentElement.search
        .slice(1)
        .split("&")
        .map((param) => param.split("="))
    );
    setSearchParams(params);
    setQueryString(
      "?" + [...searchParams].map((param) => param.join("=")).join("&")
    );
  }

  return (
    <section>
      <h3>Sort By:</h3>
      <section className="sortBy">
      <Link to={`/articles?sort_by=created_at`} onClick={handleClick}><p>Date</p></Link>
      <Link to={`/articles?sort_by=comment_count`} onClick={handleClick}><p>Comment Count</p></Link>
      <Link to={`/articles?sort_by=votes`} onClick={handleClick}><p>Votes</p></Link>
      <Link to={`/articles?order=asc`} onClick={handleClick}>
        <p>Ascending</p>
      </Link>
      <Link to={`/articles?order=desc`} onClick={handleClick}>
        <p>Descending</p>
      </Link>
      </section>
    </section>
  );
};

export default SortFunction;
