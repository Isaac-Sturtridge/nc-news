import {Link} from "react-router-dom"

const LandingPage = () => {
    return (
        <Link to={"/articles"}><h1 className="landingPage">Articles</h1></Link>
    )   

}

export default LandingPage;