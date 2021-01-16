import React, { useEffect, useState } from "react";
import './App.css';
import MediaContainer from './MediaContainer'; 

function App() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    chrome.runtime.sendMessage("Ready", function(response) {
      setUrl(response.url);
    });

  }, []);

  return (
    <div className="App">

        <MediaContainer thread_url={url} />
        <meta name="referrer" content="no-referrer"/>

    </div>
    
  );
}

export default App;
