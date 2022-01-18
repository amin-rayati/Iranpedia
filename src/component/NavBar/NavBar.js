import { React, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BsList } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { FiShoppingCart } from 'react-icons/fi'
import { LinkContainer } from 'react-router-bootstrap'
import { useProjectContext } from '../../context/ProjectProvider'
import Login from '../LoginRegister/Login'
import { Cookies, useCookies } from 'react-cookie'

const data = {
  main: [
    { path: 'news', name: 'اخبار' },
    { path: 'news', name: 'تماس با  ما' },
    { path: 'news', name: 'درباره ما' },
    { path: 'news', name: 'تبلیغات' },
    { path: 'news', name: 'همکاری با سایت' },
    { path: 'news', name: 'نظر سنجی' },
    { path: 'news', name: 'پیوند ها' },
  ],
  places: [
    // { path: 'test1', name: ' ایران' },
    // { path: 'test2', name: 'استان' },
    // { path: 'test3', name: 'شهر' },
    { path: 'test1', name: ' نقاط دیدنی' },
    { path: 'test2', name: 'سوغات' },
    { path: 'test3', name: 'صنایع دستی' },
    { path: 'test1', name: ' گالری تصاویر' },
    { path: 'test2', name: 'پیش شماره ها' },
    { path: 'test3', name: 'تلفن های ضروری' },
  ],
  iran: [
    { path: 'test1', name: ' سلسله های حکومتی ایران' },
    { path: 'test2', name: 'داستانهای پارسی' },
    { path: 'test3', name: 'اسطوره ها' },
    { path: 'test1', name: ' مشاهیر' },
    { path: 'test2', name: 'آثار هنرمندان' },
    { path: 'test3', name: 'ضرب المثل ها' },
    { path: 'test1', name: 'ترین  ها' },
    { path: 'test2', name: 'جاده ابریشم' },
    { path: 'test3', name: 'جاذبه های  یونسکو' },
    { path: 'test3', name: 'مسافت سنجی' },
  ],
  services: [
    { path: 'test1', name: 'هتل' },
    { path: 'test1', name: 'آژانس مسافرتی' },
    { path: 'test1', name: 'مراکز خرید' },
    { path: 'test1', name: 'مراکز تفریحی' },
    { path: 'test1', name: 'فروشگاها' },
    { path: 'test1', name: 'تاکسی سرویس' },
    { path: 'test1', name: 'خرید بلیط' },
    { path: 'test1', name: 'تور های داخلی' },
    { path: 'test1', name: 'تور های خارجی' },
    { path: 'test1', name: 'خدمات  آنلاین گردشگری' },
  ],
  shop: [
    { path: 'test1', name: 'صنایع دستی' },
    { path: 'test1', name: 'ملزومات سفر' },
    { path: 'test1', name: 'لوازم شکار و ماهیگیری' },
    { path: 'test1', name: 'حراجی' },
  ],
  iranian: [
    { path: 'test1', name: 'عضویت' },
    { path: 'test1', name: ' ورود اعضا' },
    { path: 'test1', name: 'سفرنامه' },
    { path: 'test1', name: 'مقالات' },
    { path: 'test1', name: 'تصاویر' },
    { path: 'test1', name: 'نماهنگ' },
    { path: 'test1', name: 'فیلم' },
    { path: 'test1', name: 'مطالب' },
  ],
  speak: [
    { path: 'test1', name: 'ارتباط با  ایران پدیا' },
    { path: 'test1', name: 'نظرات' },
  ],
  profile: [
    { path: 'test1', name: 'داشبورد' },
    { path: 'test1', name: 'خروج' },
  ],
}
const HomeNavBar = () => {
  const { loginModal, loginModalClose, loginModalShow, userData, setUserData } =
    useProjectContext()

  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  function MouseOver(event) {
    if (event.target.nodeName.toString() === 'A') {
      event.target = event.target.parentElement
    }
    let items = data[event.target.id]

    if (items) {
      document.getElementById('secondNavBar').style.opacity = 1
      document.getElementById('secondNavBar').innerHTML = items.map((e) => {
        return `<a href="/${e.path}" data-rr-ui-event-key="/${e.path}" class="mx-3 nav-font nav-hover nav-link nav-style2 " >${e.name}</a>`
      })
    } else {
      document.getElementById('secondNavBar').style.opacity = 0
    }
  }
  function MouseOut(event) {
    // document.getElementById('secondNavBar').style.opacity = 0
  }
  function onClick(event) {
    if (window.innerWidth < 768) {
      event.preventDefault()
      event.stopPropagation()
      event.nativeEvent.stopImmediatePropagation()
      MouseOver(event)
      return false
    }
  }

  const logOut = () => {
    removeCookie('user')
    setUserData(null)
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand='xl'
        className='py-2  nav-style '
        style={{
          position: 'fixed',
          top: '0',
          justifyContent: ' center',
          padding: '0px',
          zIndex: '999',
          width: '100%',
        }}
      >
        <Navbar.Toggle className='btn-nav' style={{ border: 'none' }}>
          <BsList style={{ color: 'white' }} size={35} />
        </Navbar.Toggle>
        <Navbar.Collapse
          style={{ flexGrow: '0', textAlign: 'end', marginTop: '15px' }}
          id='responsive-navbar-nav'
          className='flex-column'
        >
          <Nav
            style={{
              background: '#061422',
              padding: '20px 20px 0 20px',
              borderTopLeftRadius: '25px',
              borderTopRightRadius: '25px',
            }}
          >
            {!userData ? (
              <div
                id='login'
                onMouseOver={MouseOver}
                onClick={() => {
                  loginModalShow()
                }}
                onMouseOut={MouseOut}
                style={{ color: 'white' }}
                to='/rules'
                className=' margin-x nav-font nav-hover'
              >
                <Nav.Link>ورود/ثبت نام</Nav.Link>
              </div>
            ) : (
              // <div
              //   id='profile'
              //   onMouseOver={MouseOver}
              //   onClick={() => {
              //     loginModalShow()
              //   }}
              //   onMouseOut={MouseOut}
              //   style={{ color: 'white' }}
              //   to='/rules'
              //   className=' margin-x nav-font nav-hover'
              // >
              //   <Nav.Link>
              //     {userData['first_name'] + ' ' + userData['last_name']}
              //   </Nav.Link>
              // </div>

              <NavDropdown
                title={userData['first_name'] + ' ' + userData['last_name']}
              >
                <LinkContainer to='/dashboard' style={{ textAlign: 'right' }}>
                  <NavDropdown.Item>داشبورد</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  onClick={() => logOut()}
                  style={{ textAlign: 'right' }}
                >
                  خروج
                </NavDropdown.Item>
              </NavDropdown>
            )}
            {loginModal ? <Login /> : null}
            <div
              id='speak'
              onMouseOver={MouseOver}
              onClick={onClick}
              onMouseOut={MouseOut}
              style={{ color: 'white' }}
              to='/rules'
              className=' margin-x nav-font nav-hover'
            >
              <Nav.Link>تالار گفتگو</Nav.Link>
            </div>
            <div
              id='iranian'
              onMouseOver={MouseOver}
              onClick={onClick}
              onMouseOut={MouseOut}
              className=' margin-x nav-font nav-hover'
              style={{ color: 'white' }}
              to='/about'
            >
              <Nav.Link>ایرانیان</Nav.Link>
            </div>
            <div
              id='shop'
              onMouseOver={MouseOver}
              onClick={onClick}
              onMouseOut={MouseOut}
              style={{ color: 'white' }}
              className=' margin-x nav-font nav-hover'
              to='/support'
            >
              <Nav.Link>فروشگاه</Nav.Link>
            </div>
            <div
              id='services'
              onMouseOver={MouseOver}
              onClick={onClick}
              onMouseOut={MouseOut}
              style={{ color: 'white' }}
              to='/rules'
              className=' margin-x nav-font nav-hover'
            >
              <Nav.Link>خدمات گردشگری</Nav.Link>
            </div>
            <div
              id='iran'
              onMouseOver={MouseOver}
              onClick={onClick}
              onMouseOut={MouseOut}
              className=' margin-x nav-font nav-hover'
              style={{ color: 'white' }}
              to='/about'
            >
              <Nav.Link>ایران شناسی</Nav.Link>
            </div>
            <div
              id='places'
              onMouseOver={MouseOver}
              onClick={onClick}
              onMouseOut={MouseOut}
              style={{ color: 'white' }}
              className=' margin-x nav-font nav-hover'
              to='/support'
            >
              <Nav.Link>جاذبه های گردشگری</Nav.Link>
            </div>
            <div
              id='main'
              onMouseOver={MouseOver}
              onClick={onClick}
              onMouseOut={MouseOut}
              to='/rules'
              className=' margin-x nav-font nav-hover'
              style={{ color: 'white' }}
            >
              <Nav.Link>صفحه اصلی</Nav.Link>
            </div>
          </Nav>
          <Nav id='secondNavBar' className='secondNavBar'></Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default HomeNavBar
