import React from 'react'

function MediaContainer({thread_url}) {
    return (
        <div>
            <video width="400" controls>
                {console.log(thread_url)}
                <source src="https://i.4cdn.org/gif/1609597984859.webm" type="video/webm"/>
            </video>
        </div>
    )
}

export default MediaContainer
