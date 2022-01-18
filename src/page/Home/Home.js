import { React, useState } from 'react'
import logo from '../../assets/img/logo.png'
import CatSlider from './CatSlider'
import { LinkContainer } from 'react-router-bootstrap'
import { useHistory } from 'react-router-dom'
const Home = () => {
  let history = useHistory()
  const [searchValue, setSearchValue] = useState('')
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value)
  }
  const handleKeyDownSearch = (event) => {
    if (event.key === 'Enter') {
      history.push(`/search/${searchValue}`)
    }
  }
  return (
    <>
      <div
        className='logo-mt'
        style={{ marginTop: '180px', textAlign: 'center' }}
      >
        <img src={logo} alt='logo' style={{ width: '15%' }} className='logoW' />
      </div>
      <div className='mb-5 container'>
        <div className='row mt-5 ' style={{ justifyContent: 'center' }}>
          <div
            className='search-input-align col-lg-3 order-lg-1 order-md-2 order-sm-2 order-2 col-md-12 col-sm-12 col-12'
            style={{ textAlign: 'end' }}
          >
            <LinkContainer
              to={`/search/${searchValue}`}
              style={{ textAlign: 'right' }}
            >
              <button className='btn-search'>جستجو</button>
            </LinkContainer>
          </div>
          <div
            style={{ textAlign: 'inherit' }}
            className='search-input-align col-lg-9 order-lg-2 order-md-1 order-sm-1 order-1 col-md-12 col-sm-12 col-12'
          >
            <input
              onChange={handleSearchChange}
              value={searchValue}
              onKeyDown={handleKeyDownSearch}
              required
              placeholder='عبارت دلخواه خود را جستجو کنید'
              className='form-input form-input-mdSize'
              pattern='[0-9]{5}[-][0-9]{7}[-][0-9]{1}'
              type='text'
              title='Ten digits code'
            />
          </div>
        </div>
      </div>
      <div className='mx-5'>
        <CatSlider className='mt-5' />
      </div>
    </>
  )
}

export default Home
