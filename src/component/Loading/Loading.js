import React from 'react'
import { Spinner } from 'react-bootstrap'
const Loading = () => {
  return (
    <div className='text-center'>
      <Spinner
        animation='border'
        role='status'
        className='loaderMarginTop'
        style={{
          marginLeft: '10px',
          marginRight: '10px',
          marginBottom: '70px',
          marginTop: '70px',
        }}
      >
        <span className='visually-hidden'></span>
      </Spinner>
    </div>
  )
}

export default Loading
