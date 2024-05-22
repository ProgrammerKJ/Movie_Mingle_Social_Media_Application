import "./posts.scss";
import Post from "../post/Post";
import { useQuery } from "react-query";
import { makeRequest } from "../../axios";

const Posts = ({ userId }) => {
  const queryKey = userId ? ["posts", userId] : "posts";
  const { isLoading, error, data } = useQuery(queryKey, () =>
    makeRequest
      .get(userId ? `/posts?userId=${userId}` : "/posts")
      .then((res) => res.data)
  );

  return (
    <div className="posts">
      {error
        ? "Ooops, something went wrong!"
        : isLoading
        ? "loading..."
        : data.map((post) => <Post post={post} key={post.id} />)}
    </div>
  );
};

export default Posts;
