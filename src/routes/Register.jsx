import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import { useForm } from 'react-hook-form'

import { firebaseErrors } from '../utils/firebaseErrors'
import { formValidate } from '../utils/formValidate'
import FormErrors from '../components/FormErrors'
import FormInput from '../components/FormInput'

const Register = () => {
  const { registerUser } = useContext(UserContext)
  const navegate = useNavigate()

  const { required, patternEmail, minLength, validateTrim, validateEqualPasswords } =
    formValidate()

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
      const { code, message } = firebaseErrors(err.code)
      setError(code, { message })
    }
  }

  return (
    <>
      <h2>Register</h2>
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
        <FormInput
          type='password'
          placeholder='password'
          {...register('repassword', {
            validate: validateEqualPasswords(getValues('password'))
          })}
        >
          <FormErrors err={errors.repassword} />
        </FormInput>
        <button type='submit'>Register</button>
      </form>
    </>
  )
}

export default Register
