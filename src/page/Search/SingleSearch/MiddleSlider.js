import { React, useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import winter from '../../../assets/img/winter.jpg'
import mount from '../../../assets/img/mount.png'
import moon from '../../../assets/img/moon.png'
import video from '../../../assets/img/video.mp4'

export default function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <Slider {...settings}>
      <div>
        <img
          style={{
            width: '98%',
            height: '250px',
            borderRadius: '45px',
          }}
          src={winter}
          alt='winter'
        />
      </div>
      <div>
        <img
          style={{ width: '98%', height: '250px', borderRadius: '45px' }}
          src={moon}
          alt='moon'
        />
      </div>
      <div>
        <video
          className='video-heightSingle bg-dark'
          style={{ width: '98%' }}
          controls='controls'
          preload='metadata'
        >
          <source src={video} style={{ height: '50%' }} type='video/mp4' />
        </video>
      </div>
      <div>
        <img
          style={{
            width: '98%',
            height: '250px',
            borderRadius: '45px',
          }}
          src={winter}
          alt='winter'
        />
      </div>
      <div>
        <img
          style={{ width: '98%', height: '250px', borderRadius: '45px' }}
          src={moon}
          alt='moon'
        />
      </div>
      <div>
        <img
          style={{
            width: '98%',
            height: '250px',
            borderRadius: '45px',
          }}
          src={mount}
          alt='mount'
        />
      </div>
    </Slider>
  )
}
