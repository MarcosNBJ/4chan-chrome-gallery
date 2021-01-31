import React, { useEffect, useState } from "react";
import "../styles/Gallery.css";
import "../styles/MediaContainer.css";
import GridGallery from './GridGallery'; 
import MediaPage from './MediaPage'; 

const media = require('4chan-get-media');

function Gallery({ thread_url }) {

  const [mediaList, setMediaList] = useState([]);
  const [mediaUrl, setMediaUrl] = useState("");
  const [loadingImage, setLoadingImage] = useState(false);
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await media.get_thread_media(thread_url);
      setMediaList(result);
    }
    fetchData();
  }, [thread_url]);

  const viewMedia = (index) => {
    const fextension = mediaList[index].url.split(".").pop()
    setIsVideo(fextension === "webm")
    setLoadingImage(true)
    setMediaUrl(index);
  };

  return (
    <div className="container">
      {mediaUrl !== "" &&
        <MediaPage isVideo={isVideo} mediaList={mediaList} 
                   setLoadingImage={setLoadingImage} 
                   viewMedia={viewMedia} mediaUrl={mediaUrl}
                   loadingImage={loadingImage}/>
      }
      {mediaUrl === "" && 
        <GridGallery clickFunction={viewMedia} mediaList={mediaList} />
      }
    </div>
  )
}

export default Gallery
