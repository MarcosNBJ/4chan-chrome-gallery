import React, { useEffect, useState } from "react";
import "./Gallery.css";
import ScrollContainer from "react-indiana-drag-scroll";
import "./MediaContainer.css";
import GridGallery from './GridGallery'; 

const media = require('4chan-get-media');

function Gallery({ thread_url }) {

  const [posts, setPosts] = useState([]);
  const [mediaUrl, setMediaUrl] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await media.get_thread_media(thread_url);
      setPosts(result);
    }
    fetchData();
  }, [thread_url]);

  const viewMedia = (index) => {
    const fextension = posts[index].url.split(".").pop()
    setIsVideo(fextension === "webm")
    setLoadingImage(true)
    setMediaUrl(index);
  };

  return (
    <div className="container">
      {mediaUrl !== "" &&
        <div>
          <div className='mediaContainer'>

            {isVideo ?
              <video className='media' key={posts[mediaUrl].url} controls>
                <source src={posts[mediaUrl].url} type="video/webm" />
              </video> :
              <img className={`media ${loadingImage && "fade"}`} src={posts[mediaUrl].url} alt=""
                onLoad={() => setLoadingImage(false)}
              />
            }
          </div>
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
      {mediaUrl === "" && 
        <GridGallery clickFunction={viewMedia} mediaList={posts} />
      }
    </div>
  )
}

export default Gallery
