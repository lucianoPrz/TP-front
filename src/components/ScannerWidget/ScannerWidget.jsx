import React from 'react'
import './ScannerWidget.css'
import { Link } from 'react-router-dom'

const ScannerWidget = () => {
  const imgScanner = "https://static.thenounproject.com/png/59262-200.png"
    return (
    <Link to={"/scanner"}>
        <img className="iconScanner" src={imgScanner} alt="Scanner" />
    </Link>
  )
}

export default ScannerWidget