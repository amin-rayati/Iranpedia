import { React, useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import a from '../../assets/images/a.png'
import b from '../../assets/images/b.png'
import c from '../../assets/images/c.png'
import d from '../../assets/images/d.png'
import e from '../../assets/images/e.png'
import f from '../../assets/images/f.png'
import g from '../../assets/images/g.png'
import h from '../../assets/images/h.png'
import i from '../../assets/images/i.png'
import j from '../../assets/images/j.png'
import k from '../../assets/images/k.png'
import l from '../../assets/images/l.png'
import m from '../../assets/images/m.png'
import n from '../../assets/images/n.png'
import o from '../../assets/images/o.png'
import p from '../../assets/images/p.png'

export default function Carousel() {
  const slickDefaults = {
    rtl: true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: false,
    speed: 500,
    slidesToShow: 20,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 12,
          slidesToScroll: 12,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 12,
          slidesToScroll: 12,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 7,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          dots: true,
          slidesToScroll: 3,
        },
      },
    ],
  }

  return (
    <Slider {...slickDefaults}>
      <div>
        <img src={a} alt='a' />
      </div>
      <div>
        <img src={b} alt='b' />
      </div>
      <div>
        <img src={c} alt='c' />
      </div>
      <div>
        <img src={d} alt='d' />
      </div>
      <div>
        <img src={e} alt='e' />
      </div>
      <div>
        <img src={f} alt='f' />
      </div>
      <div>
        <img src={g} alt='g' />
      </div>
      <div>
        <img src={h} alt='h' />
      </div>

      <div>
        <img src={i} alt='i' />
      </div>
      <div>
        <img src={j} alt='j' />
      </div>
      <div>
        <img src={k} alt='k' />
      </div>
      <div>
        <img src={l} alt='l' />
      </div>
      <div>
        <img src={m} alt='m' />
      </div>
      <div>
        <img src={n} alt='n' />
      </div>
      <div>
        <img src={o} alt='o' />
      </div>
      <div>
        <img src={p} alt='p' />
      </div>
    </Slider>
  )
}
