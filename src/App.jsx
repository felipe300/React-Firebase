import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import { UserContext } from './context/UserProvider'
import RequiredAuth from './middlewares/RequiredAuth'

import Home from './routes/Home'
import Login from './routes/Login'
import Register from './routes/Register'

const App = () => {
  const { user } = useContext(UserContext)

  if (user === false) {
    return <p>LOADING...</p>
  }

  return (
    <>
      <Navbar />
      <h1>APP</h1>
      <Routes>
        <Route
          path='/'
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
