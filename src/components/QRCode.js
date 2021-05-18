import QRREact from 'qrcode.react'

export const QRCode = ({ value }) => {
  const downloadQR = () => {
    const canvas = document.getElementById('qrCodeImage')

    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream')
    let downloadLink = document.createElement('a')
    downloadLink.href = pngUrl
    downloadLink.download = 'qrCode.png'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <div>
      {value && (
        <QRREact
          value={value}
          id='qrCodeImage'
          includeMargin={true}
          size={300}
        />
      )}

      {value && (
        <div className=' text-center'>
          <a
            className='cursor-pointer text-blue-400 hover:text-red-400'
            onClick={downloadQR}
          >
            Download
          </a>
        </div>
      )}
    </div>
  )
}
