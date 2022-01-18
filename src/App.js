import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './page/Home/Home'
import NavBar from './component/NavBar/NavBar'
import Search from './page/Search/allSearches/Search'
import ImageSearch from './page/Search/imageSearch/ImageSearch'
import VideoSearch from './page/Search/VideoSearch/VideoSearch'
import MapSearch from './page/Search/MapSearch/MapSearch'
import ResturantSearch from './page/Search/ResturantSearch/ResturantSearch'
import AgenceSearch from './page/Search/AgenceSearch/AgenceSearch'
import HotelSearch from './page/Search/HotelSearch/HotelSearch'
import SingleSearch from './page/Search/SingleSearch/SingleSearch'
import SingleResturant from './page/Search/ResturantSearch/SingleResturant'

import { Cookies, useCookies } from 'react-cookie'
import axios from 'axios'
import { useProjectContext } from './context/ProjectProvider'
import News from './page/News/News'
function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const { userData, setUserData } = useProjectContext()

  window.onbeforeunload = function () {
    window.scrollTo(0, 0)
  }

  function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])

    return null
  }

  window.onload = function () {
    if (cookies['user']) {
      getIndividualInfo()
    }
  }

  const getIndividualInfo = () => {
    axios
      .post(
        'https://update.iranpedia.ir/admin/Individuals/API/_showInfo?token=test',
        {
          individual_mobile: cookies['user']['mobile'],
        },
        {
          headers: {
            token: 'test',
          },
        }
      )
      .then((response) => {
        if (response.data.isDone) {
          setUserData(response.data.data)
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/news'>
          <News />
        </Route>
        <Route exact path='/Search/:title'>
          <Search />
        </Route>
        <Route exact path='/Search/:title/images'>
          <ImageSearch />
        </Route>
        <Route exact path='/Search/:title/video'>
          <VideoSearch />
        </Route>
        <Route exact path='/Search/:title/map'>
          <MapSearch />
        </Route>
        <Route exact path='/Search/:title/resturant'>
          <ResturantSearch />
        </Route>
        <Route exact path='/Search/:title/Agence'>
          <AgenceSearch />
        </Route>
        <Route exact path='/Search/:title/resturant/single/:id'>
          <SingleResturant />
        </Route>
        <Route exact path='/Search/:title/hotel'>
          <HotelSearch />
        </Route>
        <Route exact path='/Search/:title/single/:id'>
          <SingleSearch />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
