import { React, useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FiSearch } from 'react-icons/fi'
import { AiOutlineVideoCamera } from 'react-icons/ai'
import { ImLocation2 } from 'react-icons/im'
import { BiHotel, BiRestaurant } from 'react-icons/bi'
import { MdLocalAirport } from 'react-icons/md'
import { BsImage } from 'react-icons/bs'
import { HiSpeakerphone } from 'react-icons/hi'
import { RiArticleFill } from 'react-icons/ri'
import { GiSchoolBag } from 'react-icons//gi'
import { LinkContainer } from 'react-router-bootstrap'
import { Link, useLocation } from 'react-router-dom'

export default function Carousel() {
  const slickDefaults = {
    rtl: true,
    autoplay: true,
    autoplaySpeed: 2800,
    infinite: false,
    speed: 500,
    slidesToShow: 11,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
          rtl: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          infinite: true,
          dots: true,
          rtl: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          dots: true,
          rtl: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          dots: true,
          slidesToScroll: 2,
          rtl: true,
        },
      },
    ],
  }
  const { pathname } = useLocation()
  const searchValue = pathname.split('/')[2]
  return (
    <Slider {...slickDefaults}>
      <div className='d-flex searchSlider'>
        <>
          <LinkContainer
            to={`/search/${searchValue}`}
            style={{ color: '#4B4B4B', cursor: 'pointer' }}
          >
            <span>همه مطالب</span>
          </LinkContainer>
          <LinkContainer
            to={`/search/${searchValue}`}
            style={{ color: '#707070', marginLeft: '5px', cursor: 'pointer' }}
          >
            <FiSearch size={20} />
          </LinkContainer>
        </>
      </div>
      <div className='d-flex searchSlider'>
        <LinkContainer
          to={`/search/${searchValue}/images`}
          style={{ color: '#4B4B4B', cursor: 'pointer' }}
        >
          <span>تصاویر</span>
        </LinkContainer>
        <LinkContainer
          to={`/search/${searchValue}/images`}
          style={{ color: '#707070', marginLeft: '5px', cursor: 'pointer' }}
        >
          <BsImage size={20} />
        </LinkContainer>
      </div>
      <div className='d-flex searchSlider'>
        <LinkContainer
          to={`/search/${searchValue}/video`}
          style={{ color: '#4B4B4B', cursor: 'pointer' }}
        >
          <span s>ویدئو ها</span>
        </LinkContainer>
        <LinkContainer
          to={`/search/${searchValue}/video`}
          style={{ color: '#707070', marginLeft: '5px', cursor: 'pointer' }}
        >
          <AiOutlineVideoCamera size={20} />
        </LinkContainer>
      </div>
      <div className='d-flex searchSlider'>
        <LinkContainer
          to={`/search/${searchValue}/map`}
          style={{ color: '#4B4B4B', cursor: 'pointer' }}
        >
          <span>نقشه</span>
        </LinkContainer>

        <LinkContainer
          to={`/search/${searchValue}/map`}
          style={{ color: '#707070', marginLeft: '5px', cursor: 'pointer' }}
        >
          <ImLocation2 size={20} />
        </LinkContainer>
      </div>
      <div className='d-flex searchSlider'>
        <LinkContainer
          to={`/search/${searchValue}/hotel`}
          style={{ color: '#4B4B4B', cursor: 'pointer' }}
        >
          <span>هتل</span>
        </LinkContainer>
        <LinkContainer
          to={`/search/${searchValue}/hotel`}
          style={{ color: '#707070', marginLeft: '5px', cursor: 'pointer' }}
        >
          <BiHotel size={20} />
        </LinkContainer>
      </div>
      <div className='d-flex searchSlider'>
        <LinkContainer
          to={`/search/${searchValue}/resturant`}
          style={{ color: '#4B4B4B', cursor: 'pointer' }}
        >
          <span>رستوران</span>
        </LinkContainer>
        <LinkContainer
          to={`/search/${searchValue}/resturant`}
          style={{ color: '#707070', marginLeft: '5px', cursor: 'pointer' }}
        >
          <BiRestaurant size={20} />
        </LinkContainer>
      </div>
      <div className='d-flex searchSlider'>
        <LinkContainer
          to={`/search/${searchValue}/agence`}
          style={{ color: '#4B4B4B', cursor: 'pointer' }}
        >
          <span>آژانس</span>
        </LinkContainer>

        <LinkContainer
          to={`/search/${searchValue}/resturant`}
          style={{ color: '#707070', marginLeft: '5px', cursor: 'pointer' }}
        >
          <MdLocalAirport size={20} />
        </LinkContainer>
      </div>
    </Slider>
  )
}
