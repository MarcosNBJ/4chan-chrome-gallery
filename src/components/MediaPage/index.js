import React from 'react'
import "./MediaContainer.css";
import { MediaContainer, ScrollThumbails, Thumbnail } from './style';

function MediaPage({isVideo, mediaList, setLoadingImage, viewMedia, loadingImage, mediaUrl}) {
    return (
        <div>
          <MediaContainer>
            {isVideo ?
              <video className='media' key={mediaList[mediaUrl].url} controls>
                <source src={mediaList[mediaUrl].url} type="video/webm" />
              </video> :
              <img className={`media ${loadingImage && "fade"}`} src={mediaList[mediaUrl].url} alt=""
                onLoad={() => setLoadingImage(false)}
              />
            }
          </MediaContainer>
            <ScrollThumbails>
              {mediaList.map((media, index) => (
                <Thumbnail src={media.thumbnail} alt=""
                  onClick={() =>
                    viewMedia(index)
                  }
                />
              ))}
            </ScrollThumbails>
        </div>
    )
}

export default MediaPage
