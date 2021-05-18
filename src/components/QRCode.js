import QRREact from 'react-qr-code'

export const QRCode = ({ value }) => {
  return <div>{value && <QRREact value={value} />}</div>
}
