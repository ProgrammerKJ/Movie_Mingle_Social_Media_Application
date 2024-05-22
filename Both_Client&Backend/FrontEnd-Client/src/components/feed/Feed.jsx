import "./feed.scss";
import bannerImage from "../../images/mm.png";

const Feed = () => {
  return (
    <div className="feed">
      <div className="story">
        <img src={bannerImage} alt="Banner" />
      </div>
    </div>
  );
};

export default Feed;
