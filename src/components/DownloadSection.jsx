import { useState } from 'react'
import UrlInput from './UrlInput'
import DownloadButton from './DownloadButton'
import VideoPreview from './VideoPreview'
import { downloadReel } from '../services/api'
import toast from 'react-hot-toast'
import '../styles/DownloadSection.css'

const DownloadSection = ({ onDownloadSuccess, downloadData, resetDownload }) => {
  const [url, setUrl] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e) => {
    setUrl(e.target.value)
  }

  const handleDownload = async () => {
    if (!url.trim()) {
      toast.error('Please enter an Instagram Reel URL')
      return
    }

    if (!url.includes('instagram.com')) {
      toast.error('Please enter a valid Instagram URL')
      return
    }

    setIsLoading(true)
    try {
      // In a real app, this would call your actual API
      const data = await downloadReel(url)
      onDownloadSuccess(data)
      toast.success('Reel fetched successfully!')
    } catch (error) {
      console.error('Download error:', error)
      toast.error(error.message || 'Failed to download video. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="download-section">
      <div className="download-container">
        {!downloadData ? (
          <>
            <h1 className="download-title">Instagram Reel Downloader</h1>
            <p className="download-subtitle">
              Download Instagram Reels in high quality for free - no watermark
            </p>
            <div className="download-form">
              <UrlInput 
                value={url} 
                onChange={handleInputChange} 
                placeholder="Paste Instagram Reel URL here"
              />
              <DownloadButton 
                onClick={handleDownload} 
                isLoading={isLoading}
              />
            </div>
            <div className="instructions">
              <h3>How to download Instagram Reels:</h3>
              <ol>
                <li>Copy the Reel link from Instagram</li>
                <li>Paste the URL in the field above</li>
                <li>Click Download and wait for processing</li>
                <li>Preview and download your video</li>
              </ol>
            </div>
          </>
        ) : (
          <VideoPreview 
            videoData={downloadData} 
            resetDownload={resetDownload}
          />
        )}
      </div>
    </section>
  )
}

export default DownloadSection