import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [reddingTime, setReddingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = time =>{
    // console.log('Mark As Read', time);
    const newReddingTime = reddingTime + time;
    setReddingTime(newReddingTime);
  
  }
  /* const handleMarkAsRead = time =>{
    // console.log('Mark As Read', time);
    setReddingTime(reddingTime + time)
  } */

  return (
    <div className="container mx-auto">
      <Header></Header>
      <div className="md:flex mx-w-7xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} reddingTime={reddingTime}></Bookmarks>
      </div>
    </div>
  );
}

export default App;
