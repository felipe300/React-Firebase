import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'

const Register = () => {
  const [email, setEmail] = useState('felipe300@test.com')
  const [password, setPassword] = useState('123456')

  const navegate = useNavigate()

  const { registerUser } = useContext(UserContext)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await registerUser(email, password)
      navegate('/')
      console.log('User registered')
    } catch (err) {
      console.log(err.code)
    }
  }

  return (
    <>
      <h2>Register</h2>
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
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default Register
