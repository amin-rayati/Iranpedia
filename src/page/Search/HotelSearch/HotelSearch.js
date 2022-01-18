import { React, useState } from 'react'
import iranpedia from '../../../assets/img/iranpedia.png'
import hotel1 from '../../../assets/img/hotel1.jpg'
import hotel2 from '../../../assets/img/hotel2.jpg'
import hotel3 from '../../../assets/img/hotel3.jpg'
import hotel4 from '../../../assets/img/hotel4.jpg'
import hotel5 from '../../../assets/img/hotel5.png'
import hotel6 from '../../../assets/img/hotel6.jpg'
import SearchSlider from '../SearchSlider'
import { BsImage } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { BiHotel } from 'react-icons/bi'
import { GiVillage } from 'react-icons/gi'
import { ImLocation2 } from 'react-icons/im'
import Loading from '../../../component/Loading/Loading'
import { AiFillCalendar, AiFillPhone } from 'react-icons/ai'
import { BsStopwatch, BsCircleFill } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import { FaBed, FaBuilding } from 'react-icons/fa'
import { IoMdResize } from 'react-icons/io'
import { SRLWrapper } from 'simple-react-lightbox'

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
        <span style={{ color: '#4B4B4B', cursor: 'pointer' }}>هتل</span>
        <BiHotel
          size={20}
          style={{ color: '#707070', marginLeft: '5px', cursor: 'pointer' }}
        />
      </div>

      {/* mohtava */}
      <div className='mt-5'>
        <div className='d-flex' style={{ justifyContent: 'end' }}>
          <span
            className='mx-3'
            style={{
              fontSize: '25px',
              fontWeight: 'bolder',
              textAlign: 'end',
            }}
          >
            ویلا استخردار آبسرد دماوند
          </span>
          <GiVillage style={{ color: '#707070' }} size={45} />
        </div>
        <div className='d-flex mt-3' style={{ justifyContent: 'end' }}>
          <span className='mx-3' style={{ fontSize: '15px' }}>
            تهران، دماوند، آبسرد
          </span>
          <ImLocation2 style={{ color: '#707070' }} size={25} />
        </div>
      </div>

      <SRLWrapper>
        <div className='row my-5'>
          <div className='col-lg-4 order-lg-1 col-md-12 order-md-2 col-sm-12 order-sm-2 col-12 order-2 mt-1 d-lg-block d-md-none d-sm-none d-none'>
            <img
              className='mt-1'
              src={hotel2}
              alt='hotel2'
              style={{ width: '100%', borderRadius: '15px', cursor: 'pointer' }}
            />
            <div className='row mt-1'>
              <div className='col-lg-6 mt-1'>
                <img
                  className='image-height'
                  src={hotel1}
                  alt='hotel1'
                  style={{
                    width: '100%',
                    borderRadius: '15px',
                    cursor: 'pointer',
                  }}
                />
              </div>
              <div className='col-lg-6 mt-1'>
                <img
                  className='image-height'
                  src={hotel4}
                  alt='hotel4'
                  style={{
                    width: '100%',
                    borderRadius: '15px',
                    cursor: 'pointer',
                  }}
                />
              </div>
            </div>
            <div className='row mt-1'>
              <div
                className='col-lg-4 mt-1 order-lg-1 order-md-2 order-sm-2 order-2'
                style={{
                  textAlign: 'center',
                  borderRadius: '15px',
                  cursor: 'pointer',
                  backgroundImage:
                    'url(https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f7/8b/38/exterior.jpg?w=900&h=-1&s=1)',
                }}
              >
                <BsImage style={{ marginTop: '60px' }} size={60} />
                <p
                  className='mt-2'
                  style={{ color: 'black', fontWeight: 'bolder' }}
                >
                  گالری تصاویر
                </p>
              </div>

              <div className='col-lg-8 order-lg-2 order-md-1 order-sm-1 order-1 mt-1'>
                <img
                  src={hotel6}
                  alt='hotel6'
                  style={{
                    width: '100%',
                    borderRadius: '15px',
                    cursor: 'pointer',
                  }}
                />
              </div>
            </div>
          </div>

          <div className='col-lg-8 order-lg-2 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1 mt-1'>
            <img
              className='mainImage'
              src={hotel1}
              alt='hotel1'
              style={{
                width: '100%',
                borderRadius: '15px',
                cursor: 'pointer',
                boxShadow: '0 0 20px 6px rgb(163 163 163 / 50%)',
              }}
            />
          </div>

          <div className='row order-3 mt-1 d-lg-none m-auto'>
            <div className='col-3'>
              <img
                className='mt-1'
                src={hotel1}
                alt='hotel1'
                style={{
                  width: '100%',
                  borderRadius: '2px',
                  cursor: 'pointer',
                }}
              />
            </div>
            <div className='col-3'>
              <img
                className='mt-1'
                src={hotel2}
                alt='hotel2'
                style={{
                  width: '100%',
                  borderRadius: '2px',
                  cursor: 'pointer',
                }}
              />
            </div>
            <div className='col-3'>
              <img
                className='mt-1'
                src={hotel6}
                alt='hotel6'
                style={{
                  width: '100%',
                  borderRadius: '2px',
                  cursor: 'pointer',
                }}
              />
            </div>
            <div className='col-3'>
              <img
                className='mt-1'
                src={hotel4}
                alt='hotel4'
                style={{
                  width: '100%',
                  borderRadius: '2px',
                  cursor: 'pointer',
                }}
              />
            </div>
          </div>
        </div>
      </SRLWrapper>

      <div className='row mb-5' style={{ justifyContent: 'end' }}>
        <div
          className='d-flex col-lg-4 col-md-12 col-sm-12 col-12 '
          style={{ justifyContent: 'right' }}
        >
          <p className='mx-2'>نفر</p>
          <p> 10</p>
          <p className='mx-2'>:</p>
          <p> ظرفیت استاندارد</p>
          <BiUserCircle
            size={20}
            style={{
              color: '#707070',
              marginLeft: '5px',
              cursor: 'pointer',
            }}
          />
        </div>
        <div
          className='d-flex col-lg-4 col-md-12 col-sm-12 col-12 '
          style={{ justifyContent: 'right' }}
        >
          <p>10:00 </p>
          <p className='mx-2'>تا</p>
          <p> 9:00 </p>
          <p className='mx-2'>:</p>
          <p> ساعت ورود</p>
          <BsStopwatch
            size={20}
            style={{
              color: '#707070',
              marginLeft: '5px',
              cursor: 'pointer',
            }}
          />
        </div>
        <div
          className='d-flex col-lg-4 col-md-12 col-sm-12 col-12 '
          style={{ justifyContent: 'right' }}
        >
          <p>10:00 </p>
          <p className='mx-2'>تا</p>
          <p> 9:00 </p>
          <p className='mx-2'>:</p>
          <p> ساعت ورود</p>
          <BsStopwatch
            size={20}
            style={{
              color: '#707070',
              marginLeft: '5px',
              cursor: 'pointer',
            }}
          />
        </div>
        <div
          className='d-flex col-lg-4 col-md-12 col-sm-12 col-12 '
          style={{ justifyContent: 'right' }}
        >
          <p>خوابه </p>
          <p className='mx-2'>6</p>
          <p> ویلا تریپلکس </p>
          <p className='mx-2'>:</p>
          <p> نوع بنا</p>
          <GiVillage
            size={20}
            style={{
              color: '#707070',
              marginLeft: '5px',
              cursor: 'pointer',
            }}
          />
        </div>
        <div
          className='d-flex col-lg-4 col-md-12 col-sm-12 col-12 '
          style={{ justifyContent: 'right' }}
        >
          <p style={{ direction: 'rtl' }}>500 متر زمین </p>
          <p className='mx-2'>در</p>
          <p style={{ direction: 'rtl' }}> 2000 متر بنا </p>
          <p className='mx-2'>:</p>
          <p> متراژ</p>
          <IoMdResize
            size={20}
            style={{
              color: '#707070',
              marginLeft: '5px',
              cursor: 'pointer',
            }}
          />
        </div>
        <div
          className='d-flex col-lg-4 col-md-12 col-sm-12 col-12 '
          style={{ justifyContent: 'right' }}
        >
          <p>شش تخت یک نفره </p>
          <p className='mx-2'>+</p>
          <p> دوتخت یک نفره </p>
          <p className='mx-2'>:</p>
          <p> تخت</p>
          <FaBed
            size={20}
            style={{
              color: '#707070',
              marginLeft: '5px',
              cursor: 'pointer',
            }}
          />
        </div>
        <div
          className='d-flex order-lg-1 col-lg-4 col-md-12 col-sm-12 col-12 '
          style={{ justifyContent: 'end' }}
        >
          <p> طبقه اول در ساختمان یک طبقه</p>
          <p className='mx-2'>:</p>
          <p> واحد</p>
          <FaBuilding
            size={20}
            style={{
              color: '#707070',
              marginLeft: '5px',
              cursor: 'pointer',
            }}
          />
        </div>
      </div>
      {/* mohtava */}

      <hr />

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

export default Search
