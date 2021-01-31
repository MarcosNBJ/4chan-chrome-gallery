import React from 'react'
import ScrollContainer from "react-indiana-drag-scroll";

function MediaPage({isVideo, mediaList, setLoadingImage, viewMedia, loadingImage, mediaUrl}) {
    return (
        <div>
          <div className='mediaContainer'>
            {isVideo ?
              <video className='media' key={mediaList[mediaUrl].url} controls>
                <source src={mediaList[mediaUrl].url} type="video/webm" />
              </video> :
              <img className={`media ${loadingImage && "fade"}`} src={mediaList[mediaUrl].url} alt=""
                onLoad={() => setLoadingImage(false)}
              />
            }
          </div>
          <div className="row">
            <ScrollContainer className="row__posters">
              {mediaList.map((media, index) => (
                <img className="row__poster" src={media.thumbnail} alt=""
                  onClick={() =>
                    viewMedia(index)
                  }
                />
              ))}
            </ScrollContainer>
          </div>
        </div>
    )
}

export default MediaPage
