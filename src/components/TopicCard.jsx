const TopicCard = ({topic}) => {
    return (
    <article className="topic">
    <h1>{topic.slug}</h1>
    <p>{topic.description}</p>
    </article>
    )
}

export default TopicCard;