import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'

import { UserContext } from './context/UserProvider'

import LayoutRequiredAuth from './components/Layouts/LayoutRequiredAuth'
import LayoutContainer from './components/Layouts/LayoutContainer'
import LayoutRedirect from './components/Layouts/LayoutRedirect'
import Navbar from './components/Navbar'

import Home from './routes/Home'
import Login from './routes/Login'
import Profile from './routes/Profile'
import Register from './routes/Register'
import NotFound from './routes/NotFount'

const App = () => {
  const { user } = useContext(UserContext)

  if (user === false) {
    return <p>LOADING...</p>
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<LayoutRequiredAuth />}>
          <Route index element={<Home />} />
          <Route path='/Profile' element={<Profile />} />
        </Route>

        <Route path='/' element={<LayoutContainer />}>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Route>

        <Route path='/:nanoid' element={<LayoutRedirect />}>
          <Route index element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
