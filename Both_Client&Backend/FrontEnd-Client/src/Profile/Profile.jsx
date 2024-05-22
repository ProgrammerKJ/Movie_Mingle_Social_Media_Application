import React, { useContext } from "react";
import "./profile.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../components/posts/Posts";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { makeRequest } from "../axios";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Update from "../components/update/Update";
import { useState } from "react";

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const userId = parseInt(useLocation().pathname.split("/")[2]);
  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  const { data: relationshipData } = useQuery(["relationship"], () =>
    makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
      return res.data;
    })
  );

  const queryClient = useQueryClient();
  // make an api call to /posts, if it is succesfull refetch information
  const mutation = useMutation(
    (following) => {
      if (following)
        return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", { userId });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationship"]);
      },
    }
  );

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return (
    <div className="profile">
      <div className="images">
        <img src={data.coverPic} alt="" className="cover" />
        <img src={data.profilePic} alt="" className="Profilepic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookIcon fontSize="large" />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://pintrest.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>{data.name}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>{data.city}</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>{data.website}</span>
              </div>
            </div>
            {userId === currentUser.id ? (
              <button onClick={() => setOpenUpdate(true)}>update</button>
            ) : (
              <button onClick={handleFollow}>
                {relationshipData.includes(currentUser.id)
                  ? "Following"
                  : "Follow"}
              </button>
            )}
          </div>
          <div className="right">
            <EmailIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts userId={userId} />
      </div>
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  );
};

export default Profile;
