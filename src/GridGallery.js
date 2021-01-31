import React from 'react'

function GridGallery({clickFunction, mediaList}) {
    return (
        mediaList.map((mediaList, index) => (
        <div className="responsive">
            <div className="gallery">
            <img className="card" src={mediaList.thumbnail} alt=""
                onClick={() =>
                    clickFunction(index)
                }
            />
            </div>
        </div>
        ))
    )
}

export default GridGallery
