import { useState, useEffect } from "react";
import BeautifyResponse from "./BeautifyResponse";
function Request() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(`Oops! `, err);
      });
  }, []);
  return (
    <>
      <h3>The Response from the API is -</h3>
      <ol>
        {posts.map((eachPost) => {
          // return <li key={eachPost.id}>{eachPost.title}</li>;
          return <BeautifyResponse id={eachPost.id} title={eachPost.title} />;
        })}
      </ol>
    </>
  );
}

export default Request;
