import { NavLink, Link } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import { NavbarButtonStyle } from '../utils/stylesClasses'

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
    <nav className='bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-600'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <Link to='/' className='flex items-center'>
          <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            React + Firebase App
          </span>
        </Link>
        <div className='flex md:order-2 space-x-2'>
          {user
            ? (
              <>
                <NavLink to='/' className={NavbarButtonStyle('blue')}>
                  Home
                </NavLink>
                <NavLink to='/profile' className={NavbarButtonStyle('blue')}>
                  Profile
                </NavLink>
                <button onClick={handleLogOut} className={NavbarButtonStyle('red')}>
                  Logout
                </button>
              </>
              )
            : (
              <>
                <NavLink to='/login' className={NavbarButtonStyle('blue')}>
                  Login
                </NavLink>
                <NavLink to='/register' className={NavbarButtonStyle('blue')}>
                  Register
                </NavLink>
              </>
              )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
