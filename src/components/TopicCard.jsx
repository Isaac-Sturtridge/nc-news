import { Link } from "react-router-dom";

const TopicCard = ({topic}) => {

    return (
    <article className="topic">
    <Link to={`/topics/${topic.slug}`}>
    <h1>{topic.slug}</h1>
    </Link>
    <p>{topic.description}</p>
    </article>
    )
}

export default TopicCard;