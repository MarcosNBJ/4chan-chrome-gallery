import React, { useEffect, useState } from "react";
import "./Gallery.css";
import MediaContainer from './MediaContainer'; 

const media = require('4chan-get-media');

function Gallery({thread_url}) {

    const [posts, setPosts] = useState([]);
    const [mediaUrl, setmediaUrl] = useState("");

    useEffect(() => {
        async function fetchData() {
          const result = await media.get_thread_media(thread_url);
          setPosts(result);
        }
        fetchData();
      }, [thread_url]);

      const viewMedia = (index) => {
        console.log("adasdad"); 
        setmediaUrl(index);
      };

    return (
      <div className="container">
        {mediaUrl !== "" && <MediaContainer  posts={posts}/>}
        {mediaUrl === "" && posts.map((post, index) => (
        <div className="responsive">
          <div className="gallery">
            <img className="card" src={post.thumbnail} alt=""
             onClick={() =>
              viewMedia(index)
            }
            />
          </div>
        </div>
        ))}
        <div className="clearfix"></div>
     </div>
    )
}

export default Gallery
