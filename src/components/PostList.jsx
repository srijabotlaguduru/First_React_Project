import { useState, useEffect } from "react";
import Post from "./post";
import classes from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

export default function PostList({ isVisible, onStop }) {
  const [currList, setPost] = useState([]);
  const [isFetching, setIsFetching] = useState()
  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPost(resData.posts);
    }
    fetchPosts();
  }, []);

  function addPost(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-type": "application/json" },
    });

    setPost((post) => [postData, ...post]);
  }

  let modalContent;

  if (isVisible) {
    modalContent = (
      <Modal>
        <NewPost onCancel={onStop} onAddPost={addPost} />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}

      {currList.length > 0 && (
        <ul className={classes.posts}>
          {currList.map((post) => (
            <Post key={post.body} name={post.name} message={post.body} />
          ))}
        </ul>
      )}

      {currList.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts yet</h2>
          <p>Click on add post to start adding some</p>
        </div>
      )}
    </>
  );
}
