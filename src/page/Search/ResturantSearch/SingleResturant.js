import { React, useState } from 'react'
import resturant from '../../../assets/img/resturant1.jpg'
import food from '../../../assets/img/food.jpg'
import food2 from '../../../assets/img/food2.jpg'
import food3 from '../../../assets/img/food3.jpg'
import pish1 from '../../../assets/img/pish1.jpg'
import pish2 from '../../../assets/img/pish2.jpg'
import pish3 from '../../../assets/img/pish3.jpg'
import name from '../../../assets/img/geshniz.png'
import Tab from '@material-ui/core/Tab'
import TabContext from '@material-ui/lab/TabContext'
import TabList from '@material-ui/lab/TabList'
import TabPanel from '@material-ui/lab/TabPanel'
import Grow from '@mui/material/Grow'

const Search = () => {
  const [value, setValue] = useState('1')
  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div>
      <img
        alt='bgImage'
        src={resturant}
        className='single-backImg bacImg'
        style={{ width: '100%', height: '600px' }}
      />

      <div style={{ justifyContent: 'center' }}>
        <TabContext value={value}>
          <TabList onChange={handleChange} aria-label='lab API tabs example'>
            <Tab label='پیش غذا' value='1' />
            <Tab label=' منوی مخصوص رستوران' value='2' />
            <Tab label='غذای آماده روز' value='3' />
          </TabList>
          <TabPanel value='1'>
            <Grow in={true} timeout={500} style={{ transformOrigin: '0 0 0' }}>
              <div
                className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-5'
                style={{
                  borderRadius: '30px',
                  boxShadow: 'rgb(0 0 0 / 50%) 0px 5px 30px -9px',
                }}
              >
                <div
                  className='d-flex row'
                  style={{ justifyContent: 'center' }}
                >
                  <div
                    className='col-xl-8 order-xl-1 col-lg-10 order-lg-2 col-md-10 order-md-2 col-sm-10 order-sm-2 col-10 order-2 mt-3  py-3'
                    style={{ textAlign: '-webkit-right' }}
                  >
                    <h3
                      className='mt-1'
                      style={{ fontWeight: 'bolder', textAlign: 'right' }}
                    >
                      چلو کباب لقمه نگینی
                    </h3>
                    <p
                      className='mt-3'
                      style={{ textAlign: 'right', width: '65%' }}
                    >
                      ،گوشت (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران مرغ ،گوشت
                      (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران (فیله)، جوز هندی
                      ،گوشت (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران ،جوش شیرین
                      ،گوشت (قلوه گاه گوسفندی
                    </p>
                    <div className='d-flex justify-content-end mt-3'>
                      <p>تومان</p>
                      <p>16000</p>
                    </div>
                  </div>
                  <div className='col-xl-4 order-xl-2 col-lg-12 order-lg-1 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1'>
                    <img
                      src={pish1}
                      alt='pish1'
                      className='foodImg'
                      style={{
                        width: '100%',
                        height: '215px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
              </div>
            </Grow>
            <Grow in={true} timeout={500} style={{ transformOrigin: '0 0 0' }}>
              <div
                className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-5'
                style={{
                  borderRadius: '30px',
                  boxShadow: 'rgb(0 0 0 / 50%) 0px 5px 30px -9px',
                }}
              >
                <div
                  className='d-flex row'
                  style={{ justifyContent: 'center' }}
                >
                  <div
                    className='col-xl-8 order-xl-1 col-lg-10 order-lg-2 col-md-10 order-md-2 col-sm-10 order-sm-2 col-10 order-2 mt-3  py-3'
                    style={{ textAlign: '-webkit-right' }}
                  >
                    <h3
                      className='mt-1'
                      style={{ fontWeight: 'bolder', textAlign: 'right' }}
                    >
                      چلو کباب لقمه نگینی
                    </h3>
                    <p
                      className='mt-3'
                      style={{ textAlign: 'right', width: '65%' }}
                    >
                      ،گوشت (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران مرغ ،گوشت
                      (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران (فیله)، جوز هندی
                      ،گوشت (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران ،جوش شیرین
                      ،گوشت (قلوه گاه گوسفندی
                    </p>
                    <div className='d-flex justify-content-end mt-3'>
                      <p>تومان</p>
                      <p>16000</p>
                    </div>
                  </div>
                  <div className='col-xl-4 order-xl-2 col-lg-12 order-lg-1 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1'>
                    <img
                      src={pish1}
                      alt='pish1'
                      className='foodImg'
                      style={{
                        width: '100%',
                        height: '215px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
              </div>
            </Grow>
            <Grow in={true} timeout={500} style={{ transformOrigin: '0 0 0' }}>
              <div
                className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-5'
                style={{
                  borderRadius: '30px',
                  boxShadow: 'rgb(0 0 0 / 50%) 0px 5px 30px -9px',
                }}
              >
                <div
                  className='d-flex row'
                  style={{ justifyContent: 'center' }}
                >
                  <div
                    className='col-xl-8 order-xl-1 col-lg-10 order-lg-2 col-md-10 order-md-2 col-sm-10 order-sm-2 col-10 order-2 mt-3  py-3'
                    style={{ textAlign: '-webkit-right' }}
                  >
                    <h3
                      className='mt-1'
                      style={{ fontWeight: 'bolder', textAlign: 'right' }}
                    >
                      چلو کباب لقمه نگینی
                    </h3>
                    <p
                      className='mt-3'
                      style={{ textAlign: 'right', width: '65%' }}
                    >
                      ،گوشت (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران مرغ ،گوشت
                      (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران (فیله)، جوز هندی
                      ،گوشت (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران ،جوش شیرین
                      ،گوشت (قلوه گاه گوسفندی
                    </p>
                    <div className='d-flex justify-content-end mt-3'>
                      <p>تومان</p>
                      <p>16000</p>
                    </div>
                  </div>
                  <div className='col-xl-4 order-xl-2 col-lg-12 order-lg-1 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1'>
                    <img
                      src={pish1}
                      alt='pish1'
                      className='foodImg'
                      style={{
                        width: '100%',
                        height: '215px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
              </div>
            </Grow>
          </TabPanel>
          <TabPanel value='2'>
            <Grow in={true} timeout={500} style={{ transformOrigin: '0 0 0' }}>
              <div
                className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-5'
                style={{
                  borderRadius: '30px',
                  boxShadow: 'rgb(0 0 0 / 50%) 0px 5px 30px -9px',
                }}
              >
                <div
                  className='d-flex row'
                  style={{ justifyContent: 'center' }}
                >
                  <div
                    className='col-xl-8 order-xl-1 col-lg-10 order-lg-2 col-md-10 order-md-2 col-sm-10 order-sm-2 col-10 order-2 mt-3  py-3'
                    style={{ textAlign: '-webkit-right' }}
                  >
                    <h3
                      className='mt-1'
                      style={{ fontWeight: 'bolder', textAlign: 'right' }}
                    >
                      چلو کباب لقمه نگینی
                    </h3>
                    <p
                      className='mt-3'
                      style={{ textAlign: 'right', width: '65%' }}
                    >
                      ،گوشت (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران مرغ ،گوشت
                      (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران (فیله)، جوز هندی
                      ،گوشت (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران ،جوش شیرین
                      ،گوشت (قلوه گاه گوسفندی
                    </p>
                    <div className='d-flex justify-content-end mt-3'>
                      <p>تومان</p>
                      <p>16000</p>
                    </div>
                  </div>
                  <div className='col-xl-4 order-xl-2 col-lg-12 order-lg-1 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1'>
                    <img
                      src={pish1}
                      alt='pish1'
                      className='foodImg'
                      style={{
                        width: '100%',
                        height: '215px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
              </div>
            </Grow>
            <Grow in={true} timeout={500} style={{ transformOrigin: '0 0 0' }}>
              <div
                className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-5'
                style={{
                  borderRadius: '30px',
                  boxShadow: 'rgb(0 0 0 / 50%) 0px 5px 30px -9px',
                }}
              >
                <div
                  className='d-flex row'
                  style={{ justifyContent: 'center' }}
                >
                  <div
                    className='col-xl-8 order-xl-1 col-lg-10 order-lg-2 col-md-10 order-md-2 col-sm-10 order-sm-2 col-10 order-2 mt-3  py-3'
                    style={{ textAlign: '-webkit-right' }}
                  >
                    <h3
                      className='mt-1'
                      style={{ fontWeight: 'bolder', textAlign: 'right' }}
                    >
                      چلو کباب لقمه نگینی
                    </h3>
                    <p
                      className='mt-3'
                      style={{ textAlign: 'right', width: '65%' }}
                    >
                      ،گوشت (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران مرغ ،گوشت
                      (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران (فیله)، جوز هندی
                      ،گوشت (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران ،جوش شیرین
                      ،گوشت (قلوه گاه گوسفندی
                    </p>
                    <div className='d-flex justify-content-end mt-3'>
                      <p>تومان</p>
                      <p>16000</p>
                    </div>
                  </div>
                  <div className='col-xl-4 order-xl-2 col-lg-12 order-lg-1 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1'>
                    <img
                      src={pish1}
                      alt='pish1'
                      className='foodImg'
                      style={{
                        width: '100%',
                        height: '215px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
              </div>
            </Grow>
          </TabPanel>
          <TabPanel value='3'>
            <Grow in={true} timeout={500} style={{ transformOrigin: '0 0 0' }}>
              <div
                className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-5'
                style={{
                  borderRadius: '30px',
                  boxShadow: 'rgb(0 0 0 / 50%) 0px 5px 30px -9px',
                }}
              >
                <div
                  className='d-flex row'
                  style={{ justifyContent: 'center' }}
                >
                  <div
                    className='col-xl-8 order-xl-1 col-lg-10 order-lg-2 col-md-10 order-md-2 col-sm-10 order-sm-2 col-10 order-2 mt-3  py-3'
                    style={{ textAlign: '-webkit-right' }}
                  >
                    <h3
                      className='mt-1'
                      style={{ fontWeight: 'bolder', textAlign: 'right' }}
                    >
                      چلو کباب لقمه نگینی
                    </h3>
                    <p
                      className='mt-3'
                      style={{ textAlign: 'right', width: '65%' }}
                    >
                      ،گوشت (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران مرغ ،گوشت
                      (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران (فیله)، جوز هندی
                      ،گوشت (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران ،جوش شیرین
                      ،گوشت (قلوه گاه گوسفندی
                    </p>
                    <div className='d-flex justify-content-end mt-3'>
                      <p>تومان</p>
                      <p>16000</p>
                    </div>
                  </div>
                  <div className='col-xl-4 order-xl-2 col-lg-12 order-lg-1 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1'>
                    <img
                      src={pish1}
                      alt='pish1'
                      className='foodImg'
                      style={{
                        width: '100%',
                        height: '215px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
              </div>
            </Grow>
            <Grow in={true} timeout={500} style={{ transformOrigin: '0 0 0' }}>
              <div
                className='col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 mt-5'
                style={{
                  borderRadius: '30px',
                  boxShadow: 'rgb(0 0 0 / 50%) 0px 5px 30px -9px',
                }}
              >
                <div
                  className='d-flex row'
                  style={{ justifyContent: 'center' }}
                >
                  <div
                    className='col-xl-8 order-xl-1 col-lg-10 order-lg-2 col-md-10 order-md-2 col-sm-10 order-sm-2 col-10 order-2 mt-3  py-3'
                    style={{ textAlign: '-webkit-right' }}
                  >
                    <h3
                      className='mt-1'
                      style={{ fontWeight: 'bolder', textAlign: 'right' }}
                    >
                      چلو کباب لقمه نگینی
                    </h3>
                    <p
                      className='mt-3'
                      style={{ textAlign: 'right', width: '65%' }}
                    >
                      ،گوشت (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران مرغ ،گوشت
                      (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران (فیله)، جوز هندی
                      ،گوشت (قلوه گاه گوسفندی وماهیچه گوساله) ،زعفران ،جوش شیرین
                      ،گوشت (قلوه گاه گوسفندی
                    </p>
                    <div className='d-flex justify-content-end mt-3'>
                      <p>تومان</p>
                      <p>16000</p>
                    </div>
                  </div>
                  <div className='col-xl-4 order-xl-2 col-lg-12 order-lg-1 col-md-12 order-md-1 col-sm-12 order-sm-1 col-12 order-1'>
                    <img
                      src={pish1}
                      alt='pish1'
                      className='foodImg'
                      style={{
                        width: '100%',
                        height: '215px',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
              </div>
            </Grow>
          </TabPanel>
        </TabContext>
      </div>
      <div className='mt-5' style={{ textAlign: 'center' }}>
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
    </div>
  )
}

export default Search
