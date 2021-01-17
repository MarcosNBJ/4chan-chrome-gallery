import React, { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import "./MediaContainer.css";

function MediaContainer({posts}) {


    return (
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
    )
}

export default MediaContainer
