import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Login = () => {
  const { user, setUser } = useContext(UserContext)
  const navegate = useNavigate()

  const handleLogin = () => {
    setUser(!user)
    navegate('/')
  }

  return (
    <>
      <h2>Login</h2>
      {user ? <p>You are logged in</p> : <p>You are not logged in</p>}
      <button onClick={handleLogin}>{!user ? 'LogIn' : 'Logout'}</button>
    </>
  )
}

export default Login
