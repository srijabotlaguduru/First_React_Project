import { useState } from "react";
import classes from './NewPost.module.css';

function NewPost({onCancel, onAddPost}) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredName, setEnteredName] = useState("");
  function onTextChange(event) {
    setEnteredBody(event.target.value);
  }
  function onNameChange(event) {
    setEnteredName(event.target.value);
  }
  function submitHandler(event){
    event.preventDefault();
    const postData = {
      body : enteredBody,
      name : enteredName
    };
    onAddPost(postData);
    onCancel();
  }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onTextChange}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name"  required onChange={onNameChange} />
      </p>
      <p className={classes.actions}>
        <button type='button' onClick={onCancel}>Cancel</button>
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;