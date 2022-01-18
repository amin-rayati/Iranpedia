import React from 'react'
import iranpedia from '../../../assets/img/iranpedia.png'
import { ImLocation2 } from 'react-icons/im'
import video from '../../../assets/img/video.mp4'
import SearchSlider from '../SearchSlider'
import { BsImage } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import MapComponents from '../../../component/MapComponents'
const Search = () => {
  return (
    <div className='container' style={{ marginTop: '190px' }}>
      <div className='row mb-4'>
        <div
          class='col-lg-2   order-lg-1 col-md-12 order-md-2 col-sm-12 order-sm-2 col-12 order-2'
          style={{ margin: 'auto', textAlign: 'end' }}
        >
          <h6>جستجو </h6>
        </div>
        <div
          class='col-lg-7 mt-4 order-lg-2 col-md-12 order-md-3 col-sm-12 order-sm-3 col-12 order-3'
          style={{ margin: 'auto', backgroundColor: 'white' }}
        >
          <input
            type='text'
            className='form-input'
            style={{ width: '100%', borderRadius: '10px', cursor: 'pointer' }}
          />
          <FiSearch
            style={{ position: 'relative', left: '15px', marginTop: '-60px' }}
            size={25}
          />
          <AiOutlineClose
            style={{
              position: 'relative',
              left: '25px',
              marginTop: '-60px',
              color: '#BBBBBB',
              borderLeft: '1px  solid #BBBBBB',
            }}
            size={25}
          />
        </div>
        <div
          className='col-lg-2  order-lg-3 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1'
          style={{ textAlign: 'center' }}
        >
          <img src={iranpedia} alt='iranpedia' />
        </div>
      </div>
      <div style={{ marginTop: '50px', marginBottom: '50px' }}>
        <SearchSlider />
      </div>
      <hr />
      <div style={{ textAlign: 'right' }}>
        <span style={{ color: '#BBBBBB' }}>
          نتایج جستجو برای دماوند از بین 2540 یافته
        </span>
      </div>
      <div className='d-flex mt-5' style={{ justifyContent: 'right' }}>
        <span style={{ color: '#4B4B4B', cursor: 'pointer' }}>نقشه</span>
        <ImLocation2
          size={20}
          style={{ color: '#707070', marginLeft: '5px', cursor: 'pointer' }}
        />
      </div>

      {/* mohtava */}
      <div
        className='mt-5 '
        style={{ textAlign: '-webkit-right', marginBottom: '150px' }}
      >
        <div className='col-lg-12 mt-3'>
          <MapComponents />
        </div>
      </div>
      {/* mohtava */}

      <div className='mt-5' style={{ textAlign: 'center' }}>
        <button
          style={{
            background: 'white',
            borderRadius: '15px',
            color: '#979797',
            border: '1px solid #979797',
            padding: '6px 15px 6px 15px',
            position: 'relative',
            top: '-30px',
          }}
        >
          جستجوی نتایج بیشتر
        </button>
      </div>
    </div>
  )
}

export default Search
