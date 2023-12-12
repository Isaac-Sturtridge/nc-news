const Comment = ({comment}) => {
    const {author, body, created_at, votes } = comment;


    return (
        <article className="comment">
        <h3>{author}</h3>
        <p>{body}</p>
        <p>Created_at: {created_at}</p>
        <p>Votes: {votes}</p>
        </article>
    )
}

export default Comment;