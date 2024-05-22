import { makeRequest } from "../../axios";
import { AuthContext } from "../../context/authContext";
import "./update.scss";
import { useContext, useState } from "react";
import { useMutation, useQueryClient } from "react-query";

const Update = ({ setOpenUpdate, user }) => {
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);
  const [texts, setTexts] = useState({
    name: "",
    city: "",
    website: "",
    coverPic: "",
    profilePic: "",
  });

  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const queryClient = useQueryClient();
  // make an api call to /posts, if it is succesfull refetch information
  const mutation = useMutation(
    (user) => {
      return makeRequest.put("/users", user);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );
  //if we have a new photo update it, if not use the current users photos
  const handleClick = async (e) => {
    e.preventDefault();

    // Use the URLs entered by the user or fallback to the existing ones if not provided
    const coverUrl = cover || user.coverPic;
    const profileUrl = profile || user.profilePic;

    mutation.mutate({ ...texts, coverPic: coverUrl, profilePic: profileUrl });

    setOpenUpdate(false);
  };

  return (
    <div className="update">
      Update
      <form>
        <input
          type="text"
          placeholder="Enter Cover Pic Url"
          onChange={(e) => setCover(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Profile Pic Url"
          onChange={(e) => setProfile(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter New Name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="Enter New City"
          onChange={handleChange}
        />
        <input
          type="text"
          name="website"
          placeholder="Enter New Website"
          onChange={handleChange}
        />
        <button className="update-button" onClick={handleClick}>
          Update
        </button>
      </form>
      <button className="close-button" onClick={() => setOpenUpdate(false)}>
        X
      </button>
    </div>
  );
};

export default Update;
