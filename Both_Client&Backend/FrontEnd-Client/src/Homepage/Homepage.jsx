import React, { useContext, useEffect } from "react";
import Feed from "../components/feed/Feed";
import Posts from "../components/posts/Posts";
import Share from "../components/share/Share";
import { AuthContext } from "../context/authContext";
import "./Homepage.scss";

const Homepage = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    console.log("CurrentUser in useEffect:", currentUser);
    // Add more logging or checks as needed
  }, [currentUser]);

  if (!currentUser) {
    // Add loading state or redirect to login page
    return <div>Loading...</div>;
  }

  return (
    <div className="home">
      <Feed />
      <Share />
      <Posts />
    </div>
  );
};

export default Homepage;
