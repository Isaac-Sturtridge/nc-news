const Comment = ({comment}) => {
    const {author, body, created_at, votes } = comment;


    return (
        <article className="comment">
        <h3>{author}</h3>
        <p>{body}</p>
        <p>Created_at: {created_at ? created_at : Date.now()}</p>
        <p>Votes: {votes ? votes : 0}</p>
        </article>
    )
}

export default Comment;