import { Link } from "react-router-dom";

const SortFunction = ({ setParsedParams, setSearchParams, searchParams }) => {

  function handleClick(event) {
    let params = Object.fromEntries(
      event.target.parentElement.search
        .slice(1)
        .split("&")
        .map((param) => param.split("="))
    );
    setSearchParams(params);
    // changing this down here as otherwise it doesn't update the searchParams in time for the useEffect
    setParsedParams(Object.fromEntries(searchParams))
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
