import React from 'react'
import iranpedia from '../../../assets/img/iranpedia.png'
import resturant from '../../../assets/img/resturant.png'
import first from '../../../assets/img/first.jpg'
import sec from '../../../assets/img/sec.jpg'
import { ImLocation2 } from 'react-icons/im'
import video from '../../../assets/img/video.mp4'
import SearchSlider from '../SearchSlider'
import { BsImage } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { BiHotel, BiRestaurant } from 'react-icons/bi'
import { AiFillCalendar, AiFillPhone } from 'react-icons/ai'
import { BsStopwatch, BsCircleFill } from 'react-icons/bs'
import Badge from 'react-bootstrap/Badge'
import { MdLocalAirport } from 'react-icons/md'

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
        <span style={{ color: '#4B4B4B', cursor: 'pointer' }}>آژانس</span>
        <MdLocalAirport
          size={20}
          style={{ color: '#707070', marginLeft: '5px', cursor: 'pointer' }}
        />
      </div>

      {/* mohtava */}
      <div
        className=' mt-5'
        style={{ textAlign: '-webkit-right', marginBottom: '150px' }}
      >
        <div className='row' style={{ justifyContent: 'space-between' }}>
          <div className='col-lg-6'>
            <img
              src={first}
              alt='first'
              style={{ width: '90%', borderRadius: '15px', height: '300px' }}
            />
            <div className='mt-4'>
              <div className='d-flex' style={{ justifyContent: 'right' }}>
                <p style={{ fontSize: '20px', fontWeight: 'bolder' }}>
                  رستوران قصر طلایی
                </p>
                <BiRestaurant
                  size={20}
                  style={{
                    color: '#707070',
                    marginLeft: '5px',
                    cursor: 'pointer',
                  }}
                />
              </div>
              <div className='row' style={{ justifyContent: 'space-around' }}>
                <div
                  className='d-flex col-lg-6 col-md-12 col-sm-12 col-12 '
                  style={{ justifyContent: 'right' }}
                >
                  <p>جمعه </p>
                  <p className='mx-2'>تا</p>
                  <p>یکشنبه </p>
                  <p className='mx-2'>:</p>
                  <p>روز های </p>
                  <AiFillCalendar
                    size={20}
                    style={{
                      color: '#707070',
                      marginLeft: '5px',
                      cursor: 'pointer',
                    }}
                  />
                </div>
                <div
                  className='d-flex col-lg-6 col-md-12 col-sm-12 col-12 '
                  style={{ justifyContent: 'right' }}
                >
                  <p>10:00 </p>
                  <p className='mx-2'>تا</p>
                  <p> 9:00 </p>
                  <p className='mx-2'>:</p>
                  <p> ساعت کار رستوران</p>
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
                  className='d-flex col-lg-6 col-md-12 col-sm-12 col-12 '
                  style={{ justifyContent: 'right' }}
                >
                  <p>02632280427 </p>
                  <p className='mx-2'>:</p>
                  <p>تلفن رزرو </p>
                  <AiFillPhone
                    size={20}
                    style={{
                      color: '#707070',
                      marginLeft: '5px',
                      cursor: 'pointer',
                    }}
                  />
                </div>
                <div
                  className='d-flex col-lg-6 col-md-12 col-sm-12 col-12 '
                  style={{ justifyContent: 'right' }}
                >
                  <p>دماوند وآب سرد </p>
                  <p className='mx-2'>:</p>
                  <p> آدرس</p>
                  <ImLocation2
                    size={20}
                    style={{
                      color: '#707070',
                      marginLeft: '5px',
                      cursor: 'pointer',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <img
              src={sec}
              alt='sec'
              style={{ width: '90%', borderRadius: '15px', height: '300px' }}
            />
            <div className='mt-4'>
              <div className='d-flex' style={{ justifyContent: 'right' }}>
                <p style={{ fontSize: '20px', fontWeight: 'bolder' }}>
                  رستوران قصر طلایی
                </p>
                <BiRestaurant
                  size={20}
                  style={{
                    color: '#707070',
                    marginLeft: '5px',
                    cursor: 'pointer',
                  }}
                />
              </div>
              <div className='row' style={{ justifyContent: 'space-around' }}>
                <div
                  className='d-flex col-lg-6 col-md-12 col-sm-12 col-12 '
                  style={{ justifyContent: 'right' }}
                >
                  <p>جمعه </p>
                  <p className='mx-2'>تا</p>
                  <p>یکشنبه </p>
                  <p className='mx-2'>:</p>
                  <p>روز های </p>
                  <AiFillCalendar
                    size={20}
                    style={{
                      color: '#707070',
                      marginLeft: '5px',
                      cursor: 'pointer',
                    }}
                  />
                </div>
                <div
                  className='d-flex col-lg-6 col-md-12 col-sm-12 col-12 '
                  style={{ justifyContent: 'right' }}
                >
                  <p>10:00 </p>
                  <p className='mx-2'>تا</p>
                  <p> 9:00 </p>
                  <p className='mx-2'>:</p>
                  <p> ساعت کار رستوران</p>
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
                  className='d-flex col-lg-6 col-md-12 col-sm-12 col-12 '
                  style={{ justifyContent: 'right' }}
                >
                  <p>02632280427 </p>
                  <p className='mx-2'>:</p>
                  <p>تلفن رزرو </p>
                  <AiFillPhone
                    size={20}
                    style={{
                      color: '#707070',
                      marginLeft: '5px',
                      cursor: 'pointer',
                    }}
                  />
                </div>
                <div
                  className='d-flex col-lg-6 col-md-12 col-sm-12 col-12 '
                  style={{ justifyContent: 'right' }}
                >
                  <p>دماوند وآب سرد </p>
                  <p className='mx-2'>:</p>
                  <p> آدرس</p>
                  <ImLocation2
                    size={20}
                    style={{
                      color: '#707070',
                      marginLeft: '5px',
                      cursor: 'pointer',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mohtava */}

      <div className='mt-3' style={{ textAlign: 'center' }}>
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
