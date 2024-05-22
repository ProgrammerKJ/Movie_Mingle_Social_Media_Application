import "./navbar.scss";
import { Link } from "react-router-dom";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import { useContext } from "react";
import MovieIcon from "@mui/icons-material/Movie";
import { AuthContext } from "../../context/authContext";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await logout();
      navigate("/login");
    } catch (err) {
      setErr(err.res.data);
    }
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>MovieMingle</span>
        </Link>
        <Link to="/watchlist">
          <span>
            <MovieIcon />
          </span>
        </Link>
        <Link to="/addMovie">
          <span>
            <ManageSearchOutlinedIcon />
          </span>
        </Link>
        <Link to="/watched">
          <span>
            <CheckBoxIcon />
          </span>
        </Link>
      </div>
      <div className="right">
        <div onClick={handleLogout} style={{ cursor: "pointer" }}>
          <LogoutIcon />
        </div>
        <div className="user">
          <img src={currentUser.profilePic} alt="" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
