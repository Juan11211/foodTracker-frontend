import { useState, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export function UserProvider({ children }) {

    const navigate = useNavigate();

  const [user, setUser] = useState({
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    foodEntry: [],
    errMsg: "",
  });

  function signup(credentials) {
    axios
      .post("http://localhost:9000/auth/signup", credentials)
      .then(({ data }) => {
        const { user, token } = data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUser((prevUser) => ({
          ...prevUser,
          user,
          token,
        }));
        navigate('/dashboard')
      })
      .catch((err) => console.error("Error during signup:", err));
  }

  function login(credentials) {
    axios
      .post("http://localhost:9000/auth/login", credentials)
      .then(({ data }) => {
        const { user, token } = data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUser((prevUser) => ({
          ...prevUser,
          user,
          token,
        }));
        navigate('/dashboard')
      })
      .catch((err) => console.error("Error during login:", err));
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUser({
      user: {},
      token: "",
      foodEntry: []
    })

    navigate('/register');
  }

  const getUserPosts = (userId) => {
    // Ensure that this function returns a promise
    return userAxios.get(`http://localhost:9000/api/food/user/${userId}`)
      .then(response => response.data)
      .catch(error => {
        console.error('Error fetching user posts:', error);
        throw error; // Rethrow the error to propagate it to the calling code
      });
  };


  function getAllPosts() {
    return userAxios.get('http://localhost:9000/api/food/')
      .then(response => {
        // Assuming the data you need is directly in response.data
        return response.data;
      })
      .catch(error => {
        console.error('Error fetching all posts:', error);
        throw error; // Rethrow the error to propagate it to the caller
      });
  }
  
  
  
  

  return (
    <UserContext.Provider value={{ ...user, signup, login, logout, getUserPosts, getAllPosts }}>
      {children}
    </UserContext.Provider>
  );
}
