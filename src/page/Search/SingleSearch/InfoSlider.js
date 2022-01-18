import { React, useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import back from '../../../assets/img/back.jpg'
import map from '../../../assets/img/map1.png'
import MapSlider from '../../../component/MapSlider'

export default function Carousel() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          background: 'none',
        }}
        onClick={onClick}
      />
    )
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props
    return (
      <div
        className={className}
        style={{
          ...style,
          display: 'block',
          background: 'none',
        }}
        onClick={onClick}
      />
    )
  }
  const slickDefaults = {
    rtl: true,
    autoplaySpeed: 2000,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,

          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className='sliderOnImage'>
      <Slider {...slickDefaults}>
        <div>
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              padding: '15px',
              height: '250px',
            }}
          >
            <div className='d-flex' style={{ justifyContent: 'end' }}>
              <p className='InfoFontSize'>قله دماوند</p>
              <p
                style={{ color: '#999999', fontWeight: 'bolder' }}
                className='mx-2 InfoFontSize'
              >
                :
              </p>
              <p
                className='InfoFontSize'
                style={{ color: '#999999', fontWeight: 'bolder' }}
              >
                نام
              </p>
            </div>
            <div className='d-flex' style={{ justifyContent: 'end' }}>
              <p className='InfoFontSize'>متر</p>
              <p className='InfoFontSize'>5610</p>
              <p
                style={{ color: '#999999', fontWeight: 'bolder' }}
                className='mx-2 InfoFontSize'
              >
                :
              </p>
              <p
                className='InfoFontSize'
                style={{ color: '#999999', fontWeight: 'bolder' }}
              >
                ارتفاع
              </p>
            </div>

            <div className='d-flex' style={{ justifyContent: 'end' }}>
              <p className='InfoFontSize'>متر</p>
              <p className='InfoFontSize'>4661</p>
              <p
                style={{ color: '#999999', fontWeight: 'bolder' }}
                className='mx-2 InfoFontSize'
              >
                :
              </p>
              <p
                className='InfoFontSize'
                style={{ color: '#999999', fontWeight: 'bolder' }}
              >
                برجستگی
              </p>
            </div>
            <div className='d-flex' style={{ justifyContent: 'end' }}>
              <p className='InfoFontSize'>متر</p>
              <p className='InfoFontSize'>1165</p>
              <p
                style={{ color: '#999999', fontWeight: 'bolder' }}
                className='mx-2 InfoFontSize'
              >
                :
              </p>
              <p
                className='InfoFontSize'
                style={{ color: '#999999', fontWeight: 'bolder' }}
              >
                ایزولاسیون
              </p>
            </div>
            <div className='d-flex' style={{ justifyContent: 'end' }}>
              <p
                style={{
                  direction: 'rtl',
                  textAlign: 'justify',
                  lineBreak: 'anywhere',
                }}
                className='InfoFontSize'
              >
                دماوند در بخش مرکزی رشته‌کوه البرز در جنوب دریای مازندران جای
                دارد
              </p>
              <p
                style={{ color: '#999999', fontWeight: 'bolder' }}
                className='mx-2 InfoFontSize'
              >
                :
              </p>
              <p
                className='InfoFontSize'
                style={{ color: '#999999', fontWeight: 'bolder' }}
              >
                موقعیت
              </p>
            </div>
          </div>
        </div>
        <div>
          <MapSlider />
        </div>
      </Slider>
    </div>
  )
}
