import React from 'react'
import iranpedia from '../../assets/img/iranpedia.png'
import { ImLocation2 } from 'react-icons/im'
import { AiOutlineClose } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import MapComponents from '../../component/MapComponents'
import { BsNewspaper } from 'react-icons/bs'
import coronaa from '../../assets/img/coronaa.jpg'
import Badge from 'react-bootstrap/Badge'
import { BsStopwatch, BsCircleFill } from 'react-icons/bs'

const News = () => {
  return (
    <div className='container ' style={{ marginTop: '140px' }}>
      <div className='row' style={{ justifyContent: 'center' }}>
        <div
          className='col-xl-12 col-lg-8 col-md-12 col-sm-12 row mt-5'
          style={{ justifyContent: 'center', style: '240px' }}
        >
          <div
            className='col-xl-8 col-lg-12 col-sm-12 col-12 mt-3'
            style={{ height: '213px' }}
          >
            <img src={coronaa} alt='corona' className='newsImage' />
            <button
              className=' d-xl-block d-lg-none d-md-none d-sm-none d-none'
              style={{
                position: 'relative',
                border: 'none',
                borderRadius: '50%',
                backgroundColor: '#FF6600',
                color: 'white',
                width: '45px',
                bottom: '235px',
              }}
            >
              <div className='d-flex flex-column'>
                <span style={{ fontSize: '10px', fontWeight: 'bolder' }}>
                  16
                </span>
                <span style={{ fontSize: '10px' }}>دی</span>
                <span style={{ fontSize: '10px' }}>1400</span>
              </div>
            </button>
            <button className='newBtn d-xl-block d-lg-none d-md-none d-sm-none d-none'>
              مطالب بیشتر
            </button>
            <button
              className='mx-1 d-xl-none d-lg-block d-md-block d-sm-block d-block'
              style={{
                float: 'right',
                marginTop: '10px',
                color: 'white',
                backgroundColor: ' rgb(255, 90, 90)',
                border: 'none',
                padding: ' 5px 15px 5px 15px',
                borderRadius: '17px',
                fontSize: '10px',
              }}
            >
              مطالب بیشتر
            </button>
            <button
              className='mx-1 d-xl-none d-lg-block d-md-block d-sm-block d-block'
              style={{
                float: 'right',
                marginTop: '10px',
                color: 'white',
                backgroundColor: '#FF6600',
                border: 'none',
                padding: ' 5px 15px 5px 15px',
                borderRadius: '17px',
                fontSize: '10px',
              }}
            >
              1400/10/16
            </button>
          </div>
          <div className='col-xl-4 col-lg-12 col-sm-12 col-12 mt-3'>
            <div className='d-flex' style={{ justifyContent: 'right' }}>
              <h3 className='mx-2' style={{ fontWeight: 'bolder' }}>
                آخرین وضعیت کرونا
              </h3>
              <BsNewspaper size={25} />
            </div>
            <div>
              <p
                className='mt-2'
                style={{
                  lineHeight: '30px',
                  textAlign: 'justify',
                  direction: 'rtl',
                  fontSize: '13px',
                }}
              >
                آخرین اخبار درمورد کرونا که در آن 790 نفر جان باختند و بسیاری
                ریه خود را از دست دادند آخرین اخبار درمورد کرونا که در آن 790
                نفر جان باختند و بسیاری ریه خود را از دست دادند
              </p>
            </div>
          </div>
        </div>
        <div
          className='col-xl-12 col-lg-8 col-md-12 col-sm-12 row mt-5'
          style={{ justifyContent: 'center', style: '240px' }}
        >
          <div
            className='col-xl-8 col-lg-12 col-sm-12 col-12 mt-3'
            style={{ height: '213px' }}
          >
            <img src={coronaa} alt='corona' className='newsImage' />
            <button
              className=' d-xl-block d-lg-none d-md-none d-sm-none d-none'
              style={{
                position: 'relative',
                border: 'none',
                borderRadius: '50%',
                backgroundColor: '#FF6600',
                color: 'white',
                width: '45px',
                bottom: '235px',
              }}
            >
              <div className='d-flex flex-column'>
                <span style={{ fontSize: '10px', fontWeight: 'bolder' }}>
                  16
                </span>
                <span style={{ fontSize: '10px' }}>دی</span>
                <span style={{ fontSize: '10px' }}>1400</span>
              </div>
            </button>
            <button className='newBtn d-xl-block d-lg-none d-md-none d-sm-none d-none'>
              مطالب بیشتر
            </button>
            <button
              className='mx-1 d-xl-none d-lg-block d-md-block d-sm-block d-block'
              style={{
                float: 'right',
                marginTop: '10px',
                color: 'white',
                backgroundColor: ' rgb(255, 90, 90)',
                border: 'none',
                padding: ' 5px 15px 5px 15px',
                borderRadius: '17px',
                fontSize: '10px',
              }}
            >
              مطالب بیشتر
            </button>
            <button
              className='mx-1 d-xl-none d-lg-block d-md-block d-sm-block d-block'
              style={{
                float: 'right',
                marginTop: '10px',
                color: 'white',
                backgroundColor: '#FF6600',
                border: 'none',
                padding: ' 5px 15px 5px 15px',
                borderRadius: '17px',
                fontSize: '10px',
              }}
            >
              1400/10/16
            </button>
          </div>
          <div className='col-xl-4 col-lg-12 col-sm-12 col-12 mt-3'>
            <div className='d-flex' style={{ justifyContent: 'right' }}>
              <h3 className='mx-2' style={{ fontWeight: 'bolder' }}>
                آخرین وضعیت کرونا
              </h3>
              <BsNewspaper size={25} />
            </div>
            <div>
              <p
                className='mt-2'
                style={{
                  lineHeight: '30px',
                  textAlign: 'justify',
                  direction: 'rtl',
                  fontSize: '13px',
                }}
              >
                آخرین اخبار درمورد کرونا که در آن 790 نفر جان باختند و بسیاری
                ریه خود را از دست دادند آخرین اخبار درمورد کرونا که در آن 790
                نفر جان باختند و بسیاری ریه خود را از دست دادند
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '70px' }}>
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

      {/* comments */}
      <div
        className='col-lg-10 col-md-12 col-sm-12 col-12 my-3 m-auto'
        style={{ justifyContent: 'center' }}
      >
        <div
          style={{
            borderRadius: '15px',
            padding: '30px',
            backgroundColor: '#dfdfdf',
            border: '1px solid #707070',
          }}
        >
          <div className='d-flex' style={{ justifyContent: 'end' }}>
            <span style={{ color: 'red' }}>نازنین</span>
            <BsCircleFill
              className='mt-1 mx-2'
              size={15}
              style={{
                border: '1px solid #707070',
                padding: '2px',
                borderRadius: '50%',
                color: '#707070',
              }}
            />
          </div>
          <div className='d-flex ' style={{ justifyContent: 'end' }}>
            <button
              style={{
                border: 'none',
                background: 'red',
                color: 'white',
                borderRadius: '15px',
                padding: '5px 20px 5px 20px',
                marginTop: '5px',
                marginRight: '30px',
              }}
            >
              پاسخ
            </button>
            <span
              className='cm-txt'
              style={{ marginRight: '15px', marginTop: '10px' }}
            >
              سلام من میخواستم بدونم مسیر ویلای آبسرد دماوند هموار هست؟
            </span>
          </div>
          <div
            className='mt-3'
            style={{
              border: '1px solid #707070',
              padding: '10px',
              backgroundColor: 'white',
            }}
          >
            <div className='d-flex' style={{ justifyContent: 'end' }}>
              <span style={{ color: 'red' }}>نازنین</span>
              <BsCircleFill
                className='mt-1 mx-2'
                size={15}
                style={{
                  border: '1px solid #707070',
                  padding: '2px',
                  borderRadius: '50%',
                  color: '#707070',
                }}
              />
            </div>
            <div className='d-flex ' style={{ justifyContent: 'end' }}>
              <span
                className='cm-txt'
                style={{ marginRight: '15px', marginTop: '10px' }}
              >
                سلام من میخواستم بدونم مسیر ویلای آبسرد دماوند هموار هست؟
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* comments */}

      {/* puComments */}
      <div
        className='col-lg-10 col-md-12 col-sm-12 col-12 mt-5 m-auto'
        style={{ justifyContent: 'center', textAlign: 'end' }}
      >
        <span className='mt-5' style={{ justifyContent: 'end' }}>
          دیدگاهتان را بنویسید
        </span>
        <textarea
          className='form-input1 my-3'
          type='text'
          name='name'
          placeholder='متن پیغام'
          style={{ height: '200px', border: 'none' }}
        ></textarea>
      </div>
      <div
        className='row col-lg-10 col-md-12 col-sm-12 col-12 mt-2 mb-4 m-auto'
        style={{ justifyContent: 'right', textAlign: 'end' }}
      >
        <div className='col-lg-6'>
          <div style={{ textAlign: 'right' }}>
            <label>
              <h6 style={{ color: '#4B4B4B' }}>ایمیل</h6>
            </label>
          </div>
          <input type='text' className='form-input1' />
        </div>

        <div className='col-lg-6'>
          <div style={{ textAlign: 'right' }}>
            <label>
              <h6 style={{ color: '#4B4B4B' }}>نام</h6>
            </label>
          </div>
          <input type='text' className='form-input1' />
        </div>
      </div>
      <div className='mb-5' style={{ textAlign: 'center' }}>
        <button
          style={{
            textAlign: 'center',
            border: 'none',
            outline: 'none',
            padding: '10px 40px 10px 40px',
            backgroundColor: '#60B24C',
            color: 'white',
            borderRadius: ' 10px',
          }}
        >
          فرستادن دیدگاه
        </button>
      </div>
      {/* puComments */}
    </div>
  )
}

export default News
