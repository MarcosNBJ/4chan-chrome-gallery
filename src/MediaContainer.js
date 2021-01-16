import React, { useEffect, useState } from "react";
import "./MediaContainer.css";

const media = require('4chan-get-media');

function MediaContainer({thread_url}) {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function fetchData() {
          const result = await media.get_thread_media(thread_url);
          setPosts(result);
        }
        fetchData();
      }, [thread_url]);

    console.log(posts)

    return (
      <div className="container">
        {posts.map((post) => (
        <div className="responsive">
          <div className="gallery">
          <a href={post.url}>

            <img className="card" src={post.thumbnail} alt=""/>
            </a>
          </div>
        </div>
        ))}
        <div className="clearfix"></div>
     </div>
    )
}

export default MediaContainer
