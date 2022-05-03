import { NavLink } from 'react-router-dom'
import Title from '../components/Title'

const NotFound = () => {
  return (
    <>
      <Title title='404' />
      <p className='text-center my-5 text-1xl text-blue-800'>
        <NavLink to='/login'>
          Go to Login
        </NavLink>
      </p>
    </>
  )
}

export default NotFound
