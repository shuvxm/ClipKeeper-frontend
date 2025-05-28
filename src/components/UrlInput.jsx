import '../styles/UrlInput.css'
import { FaLink, FaTimes } from 'react-icons/fa'

const UrlInput = ({ value, onChange, placeholder }) => {
  const handleClear = () => {
    onChange({ target: { value: '' } })
  }
  
  return (
    <div className="url-input-container">
      <div className="input-icon">
        <FaLink />
      </div>
      <input
        type="text"
        className="url-input"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {value && (
        <button className="clear-button" onClick={handleClear}>
          <FaTimes />
        </button>
      )}
    </div>
  )
}

export default UrlInput