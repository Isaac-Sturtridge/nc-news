const Error = ({status, message}) => {
    return (
        <div>
        <h1>{status} Error!</h1>
        <p>{message}</p>
        </div>
    )
}

export default Error;