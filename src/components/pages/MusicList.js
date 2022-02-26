import React, { useState } from 'react'
import ReactPlayer from "react-player";

export default function MusicList() {
    const [videoFilePath, setVideoFilePath] = useState(null);


const handleVideoUpload = (event) => {
setVideoFilePath(URL.createObjectURL(event.target.files[0]));
};
    return (
        <div style={{padding:'100px'}}>
            <input type="file" onChange={handleVideoUpload} />
            <ReactPlayer url={videoFilePath} width="100%" height="100%" controls={true} />
            MusicList
        </div>
    )
}
