import { useEffect, useState } from "react";
import { useContext } from "react";
import { UserContext } from "../content/UserProvider";

function Home() {
  const { getAllPosts } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch all posts when the component mounts
    getAllPosts()
      .then((data) => {
        // Update the state with the fetched posts
        setPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching all posts:', error);
      });
  }, [getAllPosts]);

  return (
    <div className="container">
      <div className="container">
        <h2>All Posts</h2>
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              {post.foodName} - {post.calories} calories
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p>HELLO</p>
      </div>
    </div>
  );
}

export default Home;
