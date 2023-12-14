import { Link } from "react-router-dom";

const Navbar = () => {

    return <nav>
        <Link to={"/articles"}>Articles</Link>
        <Link to={"/topics"}>Topics</Link>
    </nav>
}

export default Navbar;