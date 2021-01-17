import React from 'react'

function MediaContainer({url}) {

    return (
        <div>
            <img className="mediaContainer" src={url} alt=""/>
        </div>
    )
}

export default MediaContainer
