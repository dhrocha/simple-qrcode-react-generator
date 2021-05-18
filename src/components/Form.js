import { TextField } from '@material-ui/core'
import { useState } from 'react'
import { QRCode } from './QRCode'

export const Form = () => {
  const [value, setValue] = useState('')
  return (
    <div className='w-full'>
      <div className='h-2 bg-indigo'></div>
      <div className=' h-screen'>
        <div className='container mx-24 bg-white rounded shadow-lg'>
          <div className='flex flex-row px-12 py-6 gap-10 justify-center'>
            <div className='text-center'>
              <h1 className='font-normal text-3xl text-grey-darkest leading-loose my-3 w-full'>
                Gere seu qrcode
              </h1>
              <p>
                Digite o texto/url que deseja. O QRCode será gerado
                automaticamente.
                <br />
                <span className='text-red-400'>
                  Atenção: para URLs coloque http:// ou https:// antes do
                  endereço!
                </span>
              </p>
              <div className='w-full text-center mt-4'>
                <div className='w-full mx-auto p-1 pr-0'>
                  <TextField
                    id='value'
                    value={value}
                    size='medium'
                    onChange={e => setValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className='flex items-center'>
              <QRCode value={value} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
