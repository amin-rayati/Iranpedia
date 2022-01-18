import { React, useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import winter from '../../../assets/img/winter.jpg'
import mount from '../../../assets/img/mount.png'
import moon from '../../../assets/img/moon.png'
import Fade from '@mui/material/Fade'

export default function Carousel({ searchResult }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
    <Slider {...settings}>
      {searchResult &&
        searchResult.map((e, index) => {
          return (
            <Fade in={true} timeout={900} style={{ transformOrigin: '0 0 0' }}>
              <div>
                <img
                  style={{
                    width: '98%',
                    height: '250px',
                    borderRadius: '15px 15px 15px 15px',
                  }}
                  src={e.src}
                  alt='winter'
                />
              </div>
            </Fade>
          )
        })}
    </Slider>
  )
}
