import React, { useEffect, useState } from "react";
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
        <div>
        {posts.map((post) => (
          <p>{post.thumbnail}</p>
        ))}
        </div>
    )
}

export default MediaContainer
