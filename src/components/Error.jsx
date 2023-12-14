const Error = ({status, message}) => {
    return (
        <div className="error">
        <h1>{status} Error!</h1>
        <p>{message}</p>
        </div>
    )
}

export default Error;