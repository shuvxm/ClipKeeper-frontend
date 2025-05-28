import { FaHeart, FaGithub, FaTwitter } from 'react-icons/fa'
import '../styles/Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h3>InstaReel DL</h3>
          <p>The easiest way to download Instagram Reels without watermark.</p>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#how-to-use">How to Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        
        <div className="footer-social">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="#" aria-label="GitHub"><FaGithub /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} InstaReel DL. All rights reserved.</p>
        <p>Made with <FaHeart className="heart-icon" /> for Instagram users</p>
      </div>
    </footer>
  )
}

export default Footer