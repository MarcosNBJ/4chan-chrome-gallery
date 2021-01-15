import React, { useEffect, useState } from "react";
const media = require('4chan-get-media');  
const axios = require('axios');
const cheerio = require('cheerio');


function MediaContainer({thread_url}) {

    const [posts, setPosts] = useState([]);
    useEffect(() => {

        async function fetchData() {
          const instance = axios.create({
            withCredentials: false,
            headers: {
              'Access-Control-Allow-Origin' : '*',
              'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
              }
          });          
          const response = await instance.get(thread_url);
          const $ = cheerio.load(response.data);
          const mediaList = []
          $('div.postContainer').each((i, elem) => {
            const media = $(elem).find('.fileThumb');
            if (media.length) {
              mediaList.push({
                thumbnail: 'https:'+ media.find('img').attr('src'),
                url: 'https:'+ media.attr('href'),
              });
            }
          });
          setPosts(mediaList);
        }
        fetchData();
      }, [thread_url]);

    console.log(posts)

    return (
        <div>
        {posts.map((post) => (
          <p>{post.thumbnail}</p>
        ))}
        </div>
    )
}

export default MediaContainer
