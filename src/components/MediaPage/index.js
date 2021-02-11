import React from 'react'
import { MediaContainer, ScrollThumbails, Thumbnail, Video, Image } from './style';

function MediaPage({isVideo, mediaList, setLoadingImage, viewMedia, loadingImage, mediaUrl}) {
    return (
        <div>
          <MediaContainer>
            {isVideo ?
              <Video  key={mediaList[mediaUrl].url} controls>
                <source src={mediaList[mediaUrl].url} type="video/webm" />
              </Video> :
              <Image Fade={loadingImage} src={mediaList[mediaUrl].url} alt=""
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
