import { React, useState, useEffect } from 'react'
import iranpedia from '../../../assets/img/iranpedia.png'
import video from '../../../assets/img/video.mp4'
import SearchSlider from '../SearchSlider'
import { BsImage } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import Loading from '../../../component/Loading/LoginLoading'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Fade from '@mui/material/Fade'
import Error from '../Error/Error'
import Loading1 from '../Loading/Loading'
const Search = () => {
  let history = useHistory()
  const { pathname } = useLocation()
  const searchValue = pathname.split('/')[2]
  const [searchValueNew, setSearchValueNew] = useState(searchValue)
  const [i, setI] = useState(1)
  const [moreLoading, setMoreLoading] = useState(false)
  const [activeBtnMoreLoad, setActiveBtnMoreLoad] = useState(false)
  const [videoResult, setVideoResult] = useState('')

  const handleSearchChange = (e) => {
    setSearchValueNew(e.target.value)
  }
  const handleKeyDownSearch = (event) => {
    if (event.key === 'Enter') {
      history.push(`/search/${searchValueNew}/video`)
    }
  }
  const clickSearch = () => {
    history.push(`/search/${searchValueNew}/video`)
  }
  const getVideo = () => {
    axios
      .post(
        'https://update.iranpedia.ir/admin/Places/API/_getvideos?token=test',
        {
          name: searchValue,
          page: 1,
        },
        {
          headers: {
            token: 'test',
          },
        }
      )

      .then((response) => {
        if (response.data.isDone) {
          setVideoResult([...response.data.data.result])
          if (response.data.data.hasNext) {
            setActiveBtnMoreLoad(true)
          } else {
            setActiveBtnMoreLoad(false)
          }
        } else {
          setVideoResult([])
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }
  const getMoreVideo = () => {
    axios
      .post(
        'https://update.iranpedia.ir/admin/Places/API/_getvideos?token=test',
        {
          name: searchValue,
          page: i + 1,
        },
        {
          headers: {
            token: 'test',
          },
        }
      )

      .then((response) => {
        if (response.data.isDone) {
          setMoreLoading(false)
          let searchdata = [...videoResult, ...response.data.data.result]
          setVideoResult(searchdata)

          if (response.data.data.hasNext) {
            setI(i + 1)
            setActiveBtnMoreLoad(true)
          } else {
            setActiveBtnMoreLoad(false)
          }
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }
  useEffect(() => {
    getVideo()
  }, [searchValue])

  useEffect(() => {
    getVideo()
  }, [])

  // Get all <video> elements.
  const videos = document.querySelectorAll('video')

  // Pause all <video> elements except for the one that started playing.
  function pauseOtherVideos({ target }) {
    for (const video of videos) {
      if (video !== target) {
        video.pause()
      }
    }
  }

  // Listen for the 'play' event on all the <video> elements.
  for (const video of videos) {
    video.addEventListener('play', pauseOtherVideos)
  }

  return (
    <div className='container' style={{ marginTop: '190px' }}>
      <div className='row mb-4'>
        <div
          class='col-lg-2   order-lg-1 col-md-12 order-md-2 col-sm-12 order-sm-2 col-12 order-2'
          style={{ margin: 'auto', marginTop: '35px', textAlign: 'end' }}
        >
          <h6>جستجو </h6>
        </div>
        <div
          class='col-lg-7 mt-4 order-lg-2 col-md-12 order-md-3 col-sm-12 order-sm-3 col-12 order-3'
          style={{ margin: 'auto', backgroundColor: 'white' }}
        >
          <input
            onChange={handleSearchChange}
            value={searchValueNew}
            onKeyDown={handleKeyDownSearch}
            type='text'
            className='form-input'
            style={{ width: '100%' }}
          />
          <FiSearch
            onClick={() => clickSearch()}
            style={{
              position: 'relative',
              left: '15px',
              marginTop: '-60px',
              cursor: 'pointer',
            }}
            size={25}
          />
          <AiOutlineClose
            onClick={() => setSearchValueNew('')}
            style={{
              position: 'relative',
              left: '25px',
              marginTop: '-60px',
              color: '#BBBBBB',
              borderLeft: '1px  solid #BBBBBB',
              cursor: 'pointer',
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
        <span style={{ color: '#4B4B4B', cursor: 'pointer' }}>ویدئو</span>
        <BsImage
          size={20}
          style={{ color: '#707070', marginLeft: '5px', cursor: 'pointer' }}
        />
      </div>

      {/* mohtava */}
      {videoResult.length > 0 ? (
        <div
          className='row mt-5'
          style={{
            textAlign: '-webkit-right',
            marginBottom: '150px',
            justifyContent: 'end',
          }}
        >
          {videoResult &&
            videoResult.map((e, index) => {
              return (
                <Fade
                  in={true}
                  timeout={index * (100 - index)}
                  style={{ transformOrigin: '0 0 0' }}
                >
                  <div className='col-lg-4'>
                    <video
                      className='video-height bg-dark'
                      style={{ width: '100%' }}
                      controls='controls'
                      preload='metadata'
                    >
                      <source
                        src={e.src}
                        style={{ height: '50%' }}
                        type='video/mp4'
                      />
                    </video>
                  </div>
                </Fade>
              )
            })}
        </div>
      ) : (
        <Error />
      )}

      {/* mohtava */}

      {activeBtnMoreLoad ? (
        <div className='mt-5' style={{ textAlign: 'center' }}>
          <button
            onClick={() => {
              getMoreVideo()
              setMoreLoading(true)
            }}
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
            {moreLoading ? <Loading /> : '  جستجوی نتایج بیشتر'}
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Search
