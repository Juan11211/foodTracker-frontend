import { useContext, useEffect, useState } from "react";
import { UserContext } from "../content/UserProvider";

// Import statements...

function Dashboard() {
  const { user, getUserPosts } = useContext(UserContext);
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    console.log('Current user:', user);
    getUserPosts(user._id)
      .then((data) => {
        setUserPosts(data);
      })
      .catch((error) => {
        console.error('Error fetching user posts:', error);
      });
  }, [user]);

  return (
    <div className="container h-screen mt-20 ml-10">
      <h2 className="text-3xl">Welcome to the Dashboard, {user.username}!</h2>

      <div className="container">
        <h3 className="text-2xl mt-4 mb-2">Your Posts</h3>
        <div className="text-md text-dark">
          <ul>
            {userPosts && userPosts.length > 0 ? (
              userPosts.map((post) => (
                <li key={post._id}>{post.foodName} - {post.calories} calories</li>
              ))
            ) : (
              <li>No posts available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}


export default Dashboard;
