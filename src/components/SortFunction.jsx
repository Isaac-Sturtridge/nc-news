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
      <h2>Sort By:</h2>
      <p>Date</p>
      <p>Comment Count</p>
      <p>Votes</p>
      <Link to={`/articles?order=asc`} onClick={handleClick}>
        <p>Ascending</p>
      </Link>
      <Link to={`/articles?order=desc`} onClick={handleClick}>
        <p>Descending</p>
      </Link>
    </section>
  );
};

export default SortFunction;
