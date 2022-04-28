import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Login = () => {
  const [email, setEmail] = useState('felipe@dev.com')
  const [password, setPassword] = useState('123456')

  const { loginUser } = useContext(UserContext)
  const navegate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await loginUser(email, password)
      navegate('/')
    } catch (err) {
      console.log(err.code)
    }
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default Login
