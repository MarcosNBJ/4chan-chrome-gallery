import React, { useEffect, useState } from "react";
import './App.css';
import Gallery from './Gallery'; 

function App() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    chrome.runtime.sendMessage("Ready", function(response) {
      setUrl(response.url);
    });
  }, []);

  return (
    <div className="App">

        <Gallery thread_url={url} />
        <meta name="referrer" content="no-referrer"/>

    </div>
    
  );
}

export default App;
