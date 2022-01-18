import { React, useEffect, useState } from 'react'
import iranpedia from '../../../assets/img/iranpedia.png'
import SearchSlider from '../SearchSlider'
import GallerySlider from './GallerySlider'
import { BsImage } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import { FiSearch } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Loading from '../../../component/Loading/LoginLoading'
import Fade from '@mui/material/Fade'
import Error from '../Error/Error'
import Loading1 from '../Loading/Loading'
const Search = () => {
  let history = useHistory()
  const { pathname } = useLocation()
  const searchValue = pathname.split('/')[2]
  const [searchValueNew, setSearchValueNew] = useState(searchValue)

  const [searchResult, setSearchResult] = useState('')
  const [imageResult, setImageResult] = useState('')
  const [i, setI] = useState(0)
  const [moreLoading, setMoreLoading] = useState(false)
  const [activeBtnMoreLoad, setActiveBtnMoreLoad] = useState(false)

  const handleSearchChange = (e) => {
    setSearchValueNew(e.target.value)
  }
  const handleKeyDownSearch = (event) => {
    if (event.key === 'Enter') {
      history.push(`/search/${searchValueNew}`)
    }
  }
  const clickSearch = () => {
    history.push(`/search/${searchValueNew}`)
  }
  const getSearchData = () => {
    axios
      .post(
        'https://update.iranpedia.ir/admin/Places/API/_search?token=test',
        {
          name: searchValue,
          page: 0,
        },
        {
          headers: {
            token: 'test',
          },
        }
      )

      .then((response) => {
        if (response.data.isDone) {
          setImageResult(response.data.data['image'])
          setSearchResult([...response.data.data[0]])
          if (response.data.data.hasnext) {
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
  const getMoreSearchData = () => {
    axios
      .post(
        'https://update.iranpedia.ir/admin/Places/API/_search?token=test',
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
          let searchdata = [...searchResult, ...response.data.data[0]]
          setSearchResult(searchdata)

          if (response.data.data.hasnext) {
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
    getSearchData()
  }, [searchValue])
  useEffect(() => {
    getSearchData()
  }, [])

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

      <div className='d-flex mt-5' style={{ justifyContent: 'right' }}>
        <span style={{ color: '#4B4B4B', cursor: 'pointer' }}>همه مطالب</span>
        <FiSearch
          size={20}
          style={{ color: '#707070', marginLeft: '5px', cursor: 'pointer' }}
        />
      </div>

      {searchResult.length > 0 ? (
        searchResult.map((e, index) => {
          return (
            <Fade
              in={true}
              timeout={index * (100 - index)}
              style={{ transformOrigin: '0 0 0' }}
            >
              <div className='my-5 mx-3' style={{ textAlign: '-webkit-right' }}>
                <div
                  className='d-flex allSearchWidth'
                  style={{
                    justifyContent: 'right',
                    borderBottom: '1px solid #0014ff',
                    width: '20%',
                    textAlign: 'right',
                  }}
                >
                  <div className='d-flex'>
                    <p className='mx-1' style={{ color: '#8b8b8b' }}>
                      ({e.state}
                    </p>
                    {e.type === 'story' ||
                    e.type === 'palce' ||
                    e.type === 'unesco' ||
                    e.type === 'iranianAttraction' ||
                    e.type === 'artist' ||
                    e.type === 'celebrity' ||
                    e.type === 'governor' ||
                    e.type === 'myth' ? null : (
                      <p className='mx-1' style={{ color: '#8b8b8b' }}>
                        های
                      </p>
                    )}

                    {e.type === 'hotel' ? (
                      <p className='mx-1' style={{ color: '#8b8b8b' }}>
                        هتل)
                      </p>
                    ) : null}

                    {e.type === 'place' ? (
                      <p className='mx-1' style={{ color: '#8b8b8b' }}>
                        جاذبه گردشگری)
                      </p>
                    ) : null}
                    {e.type === 'agenc' ? (
                      <p className='mx-1' style={{ color: '#8b8b8b' }}>
                        آژآنس)
                      </p>
                    ) : null}
                    {e.type === 'unesco' ? (
                      <p className='mx-1' style={{ color: '#8b8b8b' }}>
                        یونسکو)
                      </p>
                    ) : null}
                    {e.type === 'iranianAttraction' ? (
                      <p className='mx-1' style={{ color: '#8b8b8b' }}>
                        هنرمندان ایرانی)
                      </p>
                    ) : null}

                    {e.type === 'artist' ? (
                      <p className='mx-1' style={{ color: '#8b8b8b' }}>
                        هنرمندان)
                      </p>
                    ) : null}

                    {e.type === 'celebrity' ? (
                      <p className='mx-1' style={{ color: '#8b8b8b' }}>
                        مشاهیر)
                      </p>
                    ) : null}

                    {e.type === 'story' ? (
                      <p className='mx-1' style={{ color: '#8b8b8b' }}>
                        داستان )
                      </p>
                    ) : null}

                    {e.type === 'governor' ? (
                      <p className='mx-1' style={{ color: '#8b8b8b' }}>
                        سلسله های حکومتی)
                      </p>
                    ) : null}
                    {e.type === 'myth' ? (
                      <p className='mx-1' style={{ color: '#8b8b8b' }}>
                        اساطیر)
                      </p>
                    ) : null}
                  </div>

                  <h6 style={{ color: '#0014ff' }}>{e.name}</h6>
                </div>

                <p
                  className='mt-2'
                  style={{
                    textAlign: 'justify',
                    direction: 'rtl',
                    color: '#8b8b8b',
                  }}
                >
                  {e.description}
                </p>
              </div>
            </Fade>
          )
        })
      ) : (
        <Error />
      )}

      {activeBtnMoreLoad ? (
        <div className='mt-5' style={{ textAlign: 'center' }}>
          <button
            onClick={() => {
              getMoreSearchData()
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
