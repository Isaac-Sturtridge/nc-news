import { Link } from "react-router-dom";

const Navbar = ({setRefreshSignal}) => {

    function handleClick() {
        setRefreshSignal(!setRefreshSignal)
    }

    return <nav className="navbar">
        <Link className="navbar-brand" onClick={handleClick} to={"/articles"}>Articles</Link>
        <Link className="navbar-brand" to={"/topics"}>Topics</Link>
        <Link className="navbar-brand" to={"/new-article"}>Add a New Article</Link>
    </nav>
}

export default Navbar;