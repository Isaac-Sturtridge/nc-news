import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const SortFunction = ({setQueryString}) => {
const [clicked, setClicked] = useState(false)
const url = useLocation().search

function handleClick() {
    setClicked(!clicked)
    setQueryString(url)
}
  return (
    <section>
      <h2>Sort By:</h2>
      <p>Date</p>
      <p>Comment Count</p>
      <p>Votes</p>
      <Link to={`/articles?order=asc`} onClick={handleClick}><p>Ascending</p></Link>
      <Link to={`/articles?order=desc`} onClick={handleClick}><p>Descending</p></Link>
    </section>
  );
};

export default SortFunction;
