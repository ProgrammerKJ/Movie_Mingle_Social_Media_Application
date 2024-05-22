import "./leftbar.scss";
import Watchlist from "../../images/WatchlistIcon.png";
import Watched from "../../images/WatchedIcon.png";
import Netflix from "../../images/Netflix.png";
import Amazon from "../../images/prime.png";
import Hulu from "../../images/Hulu.png";
import Paramount from "../../images/paramount.png";
import Apple from "../../images/Apple.png";
import Disney from "../../images/disney.png";
import Rotten from "../../images/Rotten Tomatoes.png";
import IMBD from "../../images/IMBD.png";
import Meta from "../../images/Metacritic.png";
import Search from "../../images/Search.png";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

const Leftbar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <Link to={`/profile/${currentUser.id}`}>
            <div className="user">
              <img src={currentUser.profilePic} alt="" />
              <span>{currentUser.name}</span>
            </div>
          </Link>
          <Link to="/addMovie">
            <div className="item">
              <img src={Search} alt="" />
              <span>Search Movies</span>
            </div>
          </Link>
          <Link to="/watchlist">
            <div className="item">
              <img src={Watchlist} alt="" />
              <span>WatchList</span>
            </div>
          </Link>
          <Link to="/watched">
            <div className="item">
              <img src={Watched} alt="" />
              <span>Watched Movies</span>
            </div>
          </Link>

          <div>
            <hr />
            <div className="menu">
              <span>Streaming Shortcuts</span>
              <a href="https://www.netflix.com/">
                <div className="item">
                  <img src={Netflix} alt="" />
                  <span>Netflix</span>
                </div>
              </a>
              <a href="https://tv.apple.com/">
                <div className="item">
                  <img src={Apple} alt="" />
                  <span>Apple TV</span>
                </div>
              </a>
              <a href="https://www.disneyplus.com/">
                <div className="item">
                  <img src={Disney} alt="" />
                  <span>Disney +</span>
                </div>
              </a>
              <a href="https://www.amazon.com/">
                <div className="item">
                  <img src={Amazon} alt="" />
                  <span>Prime Video</span>
                </div>
              </a>
              <a href="https://www.hulu.com/">
                <div className="item">
                  <img src={Hulu} alt="" />
                  <span>Hulu</span>
                </div>
              </a>
              <a href="https://www.paramountplus.com/">
                <div className="item">
                  <img src={Paramount} alt="" />
                  <span>Paramount</span>
                </div>
              </a>
            </div>
            <hr />
            <div className="menu">
              <span>Ratings Shortcuts</span>
              <a href="https://www.imdb.com/">
                <div className="item">
                  <img src={IMBD} alt="" />
                  <span>IMBD</span>
                </div>
              </a>
              <a href="https://www.rottentomatoes.com/">
                <div className="item">
                  <img src={Rotten} alt="" />
                  <span>Rotten Tomatoes</span>
                </div>
              </a>
              <a href="https://www.metacritic.com/">
                <div className="item">
                  <img src={Meta} alt="" />
                  <span>Metacritic</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
