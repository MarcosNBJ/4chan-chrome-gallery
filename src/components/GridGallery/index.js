import React from 'react'
import {Responsive, Card} from './style';

function GridGallery({clickFunction, mediaList}) {
    return (
        mediaList.map((mediaList, index) => (
        <Responsive>
            <div>
            <Card src={mediaList.thumbnail} alt=""
                onClick={() =>
                    clickFunction(index)
                }
            />
            </div>
        </Responsive>
        ))
    )
}

export default GridGallery
