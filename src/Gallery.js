import React, { useEffect, useState } from "react";
import "./Gallery.css";
import ScrollContainer from "react-indiana-drag-scroll";
import "./MediaContainer.css";

const media = require('4chan-get-media');

function Gallery({thread_url}) {

    const [posts, setPosts] = useState([]);
    const [mediaUrl, setMediaUrl] = useState("");
    const [loadingImage, setLoadingImage] = useState(false);

    useEffect(() => {
        async function fetchData() {
          const result = await media.get_thread_media(thread_url);
          setPosts(result);
        }
        fetchData();
      }, [thread_url]);

      const viewMedia = (index) => {
        console.log("adasdad");
        setLoadingImage(true) 
        setMediaUrl(index);
      };

    return (
      <div className="container">
        {mediaUrl !== "" && 
          <div>
            <img className={`mediaContainer ${loadingImage && "fade"}`} src={posts[mediaUrl].url} alt=""  
              onLoad={() => setLoadingImage(false)}
            />
            <div className="row">
            <ScrollContainer className="row__posters">
                {posts.map((post, index) => (
                        <img className="row__poster" src={post.thumbnail} alt=""
                        onClick={() =>
                        viewMedia(index)
                        }
                        />
                ))}
            </ScrollContainer>
            </div>
          </div>
        }
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