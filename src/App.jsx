import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import RequiredAuth from './middlewares/RequiredAuth'

import Home from './routes/Home'
import Login from './routes/Login'

const App = () => {
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
      </Routes>
    </>
  )
}

export default App
