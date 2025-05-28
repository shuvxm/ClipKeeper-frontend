import { FaInstagram, FaDownload, FaCheckCircle, FaMobileAlt } from 'react-icons/fa'
import '../styles/FeatureSection.css'

const FeatureSection = () => {
  return (
    <section className="feature-section" id="features">
      <div className="feature-container">
        <h2 className="feature-heading">Why Use Our Instagram Reel Downloader?</h2>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaInstagram />
            </div>
            <h3>Easy to Use</h3>
            <p>Simply paste the Instagram Reel URL and click download. No registration required.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaDownload />
            </div>
            <h3>High Quality</h3>
            <p>Download Instagram Reels in the highest quality available - exactly as they appear on Instagram.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaCheckCircle />
            </div>
            <h3>No Watermark</h3>
            <p>All downloaded videos are free from annoying watermarks. Get clean, original videos.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <FaMobileAlt />
            </div>
            <h3>Mobile Friendly</h3>
            <p>Works perfectly on all devices - download Instagram Reels on your phone, tablet, or computer.</p>
          </div>
        </div>
        
        <div className="how-to-use" id="how-to-use">
          <h2>How to Download Instagram Reels</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Copy Link</h3>
              <p>Open Instagram and copy the link of the Reel you want to download</p>
            </div>
            
            <div className="step">
              <div className="step-number">2</div>
              <h3>Paste URL</h3>
              <p>Paste the copied URL into the input field on our website</p>
            </div>
            
            <div className="step">
              <div className="step-number">3</div>
              <h3>Download</h3>
              <p>Click the download button and save the video to your device</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeatureSection