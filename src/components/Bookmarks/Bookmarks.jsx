import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, reddingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 mt-10 pt-4">
      <div>
        <h3 className="text-4xl text-center mb-4">Reading Time: {reddingTime}</h3>
      </div>
      <h2 className="text-3xl text-center">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  reddingTime: PropTypes.number,
};

export default Bookmarks;
