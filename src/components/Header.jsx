import { useState, useEffect } from 'react'
import Logo from './Logo'
import '../styles/Header.css'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <Logo />
        <nav className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#features" className="nav-link">Features</a>
          <a href="#how-to-use" className="nav-link">How to Use</a>
        </nav>
      </div>
    </header>
  )
}

export default Header