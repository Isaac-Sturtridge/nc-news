import { useState } from "react";

const AddNewComment = ({setComments}) => {
    const [input, setInput] = useState('')

    function handleChange (event) {
        setInput(event.target.value)
    }

  function handleSubmit(event) {
    event.preventDefault()
    setComments((currComments) => {
        console.log(currComments)
        return [...currComments, {body: input}]
       // [...currComments, {body: input}]
    })
  }

  return (
    <form className="addNewComment" onSubmit={handleSubmit}>
      <label htmlFor="addComment">
        Add new comment:
        <input
          type="text"
          placeholder="Add your comment here"
          name="addComment"
          id="addComment"
          value={input}
          onChange={handleChange}
        />
        <button>Submit comment</button>
      </label>
    </form>
  );
};

export default AddNewComment;
