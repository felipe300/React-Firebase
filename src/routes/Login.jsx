import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import FormErrors from '../components/FormErrors'
import FormInput from '../components/FormInput'
import { UserContext } from '../context/UserProvider'
import { firebaseErrors } from '../utils/firebaseErrors'
import { formValidate } from '../utils/formValidate'

const Login = () => {
  const { loginUser } = useContext(UserContext)
  const navegate = useNavigate()

  const { required, patternEmail, minLength, validateTrim } = formValidate()

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: 'felipe@dev.com',
      password: '123456'
    }
  })

  const onSubmit = async ({ email, password }) => {
    try {
      await loginUser(email, password)
      navegate('/')
    } catch (err) {
      const { code, message } = firebaseErrors(err.code)
      setError(code, { message })
    }
  }

  return (
    <>
      <h2>Login</h2>
      <FormErrors err={errors.firebase} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type='email'
          placeholder='email'
          {...register('email', {
            required,
            pattern: patternEmail
          })}
        >
          <FormErrors err={errors.email} />
        </FormInput>
        <FormInput
          type='password'
          placeholder='password'
          {...register('password', {
            minLength,
            validate: validateTrim
          })}
        >
          <FormErrors err={errors.password} />
        </FormInput>
        <button type='submit'>Login</button>
      </form>
    </>
  )
}

export default Login
