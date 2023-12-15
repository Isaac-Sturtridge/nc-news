import { Link } from "react-router-dom";

const Navbar = () => {

    return <nav className="navbar">
        <Link className="navbar-brand" to={"/articles"}>Articles</Link>
        <Link className="navbar-brand" to={"/topics"}>Topics</Link>
    </nav>
}

export default Navbar;