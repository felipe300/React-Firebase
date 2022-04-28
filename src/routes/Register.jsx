import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import { useForm } from 'react-hook-form'

const Register = () => {
  const { registerUser } = useContext(UserContext)
  const navegate = useNavigate()
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: 'felipe@dev.com',
      password: '123456',
      repassword: '123456'
    }
  })

  const onSubmit = async ({ email, password }) => {
    try {
      await registerUser(email, password)
      navegate('/')
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('email', {
          message: 'Email already in use'
        })
      }

      if (err.code === 'auth/invalid-emai') {
        setError('email', {
          message: 'Invalid email'
        })
      }
    }
  }

  return (
    <>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type='email'
          placeholder='email'
          {...register('email', {
            required: {
              value: true,
              message: 'Email is required'
            },
            pattern: {
              value:
                /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
              message: 'Invalid email address'
            }
          })}
        />
        {errors.email && <span>{errors.email.message}</span>}
        <input
          type='password'
          placeholder='password'
          {...register('password', {
            required: true,
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters'
            },
            validate: {
              trim: (v) => {
                if (v.includes(' ')) return 'Password cannot have a whitespace'
                true
              }
            }
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}
        <input
          type='password'
          placeholder='password'
          {...register('repassword', {
            validate: {
              equals: (v) => v === getValues('password') || 'Passwords do not match'
            }
          })}
        />
        {errors.repassword && <span>{errors.repassword.message}</span>}
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default Register
