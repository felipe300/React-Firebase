import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

const Navbar = () => {
  const { user, signOutUser } = useContext(UserContext)

  const handleLogOut = async () => {
    try {
      await signOutUser()
    } catch (err) {
      console.log(err.code)
    }
  }

  return (
    <div>
      {user
        ? (
          <>
            <NavLink to='/'>Home</NavLink>
            <button onClick={handleLogOut}>Logout</button>
          </>
          )
        : (
          <>
            <NavLink to='/login'>Login</NavLink>
            <NavLink to='/register'>Register</NavLink>
          </>
          )}
    </div>
  )
}

export default Navbar
