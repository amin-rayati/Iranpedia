import { React, useState, useEffect } from 'react'
import iranpedia from '../../../assets/img/iranpedia.png'
import ax1 from '../../../assets/img/ax1.png'
import ax2 from '../../../assets/img/ax2.png'
import ax3 from '../../../assets/img/ax3.png'
import ax4 from '../../../assets/img/ax4.png'
import ax5 from '../../../assets/img/ax5.png'
import ax6 from '../../../assets/img/ax6.png'
import ax7 from '../../../assets/img/ax7.png'
import Damavand from '../../../assets/img/Damavand.png'
import SearchSlider from '../SearchSlider'
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

  const [searchResultLeft, setSearchResultLeft] = useState('')
  const [searchResultRight, setSearchResultRight] = useState('')
  const [i, setI] = useState(0)
  const [moreLoading, setMoreLoading] = useState(false)
  const [activeBtnMoreLoad, setActiveBtnMoreLoad] = useState(false)

  const handleSearchChange = (e) => {
    setSearchValueNew(e.target.value)
  }
  const handleKeyDownSearch = (event) => {
    if (event.key === 'Enter') {
      history.push(`/search/${searchValueNew}/images`)
    }
  }
  const clickSearch = () => {
    history.push(`/search/${searchValueNew}/images`)
  }
  const getImages = () => {
    axios
      .post(
        'https://update.iranpedia.ir/admin/Places/API/_showimg?token=test',
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
        console.log(response)

        if (response.data.isDone) {
          setSearchResultLeft([...response.data.data['firstArray']])
          setSearchResultRight([...response.data.data['secondArray']])
          if (response.data.data.hasNext) {
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

  const getMoreImages = () => {
    axios
      .post(
        'https://update.iranpedia.ir/admin/Places/API/_showimg?token=test',
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
          let Left = [...searchResultLeft, ...response.data.data['firstArray']]
          setSearchResultLeft(Left)

          let Right = [
            ...searchResultRight,
            ...response.data.data['secondArray'],
          ]
          setSearchResultRight(Right)

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
    getImages()
  }, [searchValue])

  useEffect(() => {
    getImages()
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
      <div style={{ textAlign: 'right' }}>
        <span style={{ color: '#BBBBBB' }}>
          نتایج جستجو برای دماوند از بین 2540 یافته
        </span>
      </div>
      <div className='d-flex mt-5' style={{ justifyContent: 'right' }}>
        <span style={{ color: '#4B4B4B', cursor: 'pointer' }}>تصاویر</span>
        <BsImage
          size={20}
          style={{ color: '#707070', marginLeft: '5px', cursor: 'pointer' }}
        />
      </div>

      {searchResultLeft.length > 0 ? (
        <>
          {' '}
          {/* mohtava */}
          <div
            className='row mt-5'
            style={{ textAlign: '-webkit-right', marginBottom: '150px' }}
          >
            <div className='col-lg-7 mt-3'>
              {searchResultLeft &&
                searchResultLeft.map((e, index) => {
                  return (
                    <>
                      <Fade
                        in={true}
                        timeout={index * (100 - index)}
                        style={{ transformOrigin: '0 0 0' }}
                      >
                        <img
                          className='mt-2'
                          src={e.src}
                          style={{
                            width: '100%',
                            borderRadius: '10px',
                            cursor: 'pointer',
                          }}
                          alt={e.id}
                        />
                      </Fade>
                    </>
                  )
                })}
            </div>
            <div className='col-lg-5 mt-3'>
              {searchResultRight &&
                searchResultRight.map((e, index) => {
                  return (
                    <>
                      <Fade
                        in={true}
                        timeout={index * (100 - index)}
                        style={{ transformOrigin: '0 0 0' }}
                      >
                        <img
                          className='mt-2'
                          src={e.src}
                          style={{
                            width: '100%',
                            borderRadius: '10px',
                            cursor: 'pointer',
                          }}
                          alt={e.id}
                        />
                      </Fade>
                    </>
                  )
                })}
            </div>
          </div>
          {/* mohtava */}
        </>
      ) : (
        <Error />
      )}

      {activeBtnMoreLoad ? (
        <div className='mt-5' style={{ textAlign: 'center' }}>
          <button
            onClick={() => {
              getMoreImages()
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
