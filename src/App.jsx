import { useState } from 'react'
import Header from './components/Header'
import DownloadSection from './components/DownloadSection'
import Footer from './components/Footer'
import FeatureSection from './components/FeatureSection'
import { Toaster } from 'react-hot-toast'
import './App.css'

function App() {
  const [downloadData, setDownloadData] = useState(null)

  const handleDownloadSuccess = (data) => {
    setDownloadData(data)
  }

  const resetDownload = () => {
    setDownloadData(null)
  }

  return (
    <div className="app-container">
      <Toaster position="top-center" />
      <Header />
      <main className="main-content">
        <DownloadSection 
          onDownloadSuccess={handleDownloadSuccess} 
          downloadData={downloadData}
          resetDownload={resetDownload}
        />
        <FeatureSection />
      </main>
      <Footer />
    </div>
  )
}

export default App