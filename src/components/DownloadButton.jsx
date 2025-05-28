import { FaDownload } from 'react-icons/fa'
import '../styles/DownloadButton.css'

const DownloadButton = ({ onClick, isLoading }) => {
  return (
    <button 
      className={`download-button ${isLoading ? 'loading' : ''}`} 
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <span className="loading-spinner"></span>
          <span>Processing...</span>
        </>
      ) : (
        <>
          <FaDownload className="download-icon" />
          <span>Search</span>
        </>
      )}
    </button>
  )
}

export default DownloadButton