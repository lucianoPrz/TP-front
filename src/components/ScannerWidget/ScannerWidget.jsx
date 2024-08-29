import "./ScannerWidget.css"

const ScannerWidget = () => {
    const imgScanner = "https://cdn-icons-png.flaticon.com/512/6927/6927609.png"

  return (
    <div>
        <img className="imgScanner" src={imgScanner} alt="scanner" />
    </div>
  )
}

export default ScannerWidget