import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import LoadingButton from '../components/ButtonLoading'
import FormErrors from '../components/FormErrors'
import FormInput from '../components/FormInput'
import Title from '../components/Title'
import { UserContext } from '../context/UserProvider'
import { firebaseErrors } from '../utils/firebaseErrors'
import { formValidate } from '../utils/formValidate'

const Login = () => {
  const { loginUser } = useContext(UserContext)
  const [loading, setLoading] = useState(false)
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
      setLoading(true)
      await loginUser(email, password)
      navegate('/')
    } catch (err) {
      const { code, message } = firebaseErrors(err.code)
      setError(code, { message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Title title='Login' />
      <FormErrors err={errors.firebase} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          label='Email'
          type='email'
          placeholder='email'
          {...register('email', {
            required,
            pattern: patternEmail
          })}
          error={errors.email}
        >
          <FormErrors err={errors.email} />
        </FormInput>
        <FormInput
          label='Password'
          type='password'
          placeholder='password'
          {...register('password', {
            minLength,
            validate: validateTrim
          })}
          error={errors.password}
        >
          <FormErrors err={errors.password} />
        </FormInput>
        {
          loading ? <LoadingButton /> : <Button type='submit' text='Login' />
        }
      </form>
    </>
  )
}

export default Login
