import { useState } from 'react';
import ReactPlayer from 'react-player';
import { FaDownload, FaArrowLeft } from 'react-icons/fa';
import '../styles/VideoPreview.css';

const VideoPreview = ({ videoData, resetDownload }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleDownloadClick = () => {
    const proxyUrl = `http://localhost:8080/api/v1/download?url=${encodeURIComponent(videoData.downloadUrl)}`;
    const a = document.createElement('a');
    a.href = proxyUrl;
    a.setAttribute('download', 'instagram-reel.mp4');
    a.setAttribute('target', '_blank');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };


  return (
    <div className="video-preview-container">
      <h2 className="preview-title">Your Instagram Reel</h2>

      <div className="player-wrapper">
        <ReactPlayer
          url={videoData.url}
          className="react-player"
          width="100%"
          height="100%"
          controls={true}
          playing={isPlaying}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>

      <div className="video-info">
        <div className="video-metadata">
          <p><strong>Duration:</strong> Unknown</p>
          <p><strong>Quality:</strong> HD</p>
        </div>

        <div className="video-actions">
          <button className="download-now-button" onClick={handleDownloadClick}>
            <FaDownload /> Download Now
          </button>

          <button className="back-button" onClick={resetDownload}>
            <FaArrowLeft /> Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPreview;
