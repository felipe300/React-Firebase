import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserProvider'
import { useForm } from 'react-hook-form'

import { firebaseErrors } from '../utils/firebaseErrors'
import { formValidate } from '../utils/formValidate'
import FormErrors from '../components/FormErrors'
import FormInput from '../components/FormInput'
import Title from '../components/Title'
import Button from '../components/Button'
import LoadingButton from '../components/ButtonLoading'

const Register = () => {
  const { registerUser } = useContext(UserContext)
  const [loading, setLoading] = useState(false)
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
      setLoading(true)
      await registerUser(email, password)
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
      <Title title='Register' />
      <FormErrors err={errors.firebase} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type='email'
          placeholder='email'
          {...register('email', {
            required,
            pattern: patternEmail
          })}
          label='Email'
          error={errors.email}
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
          label='Password'
          error={errors.password}
        >
          <FormErrors err={errors.password} />
        </FormInput>
        <FormInput
          type='password'
          placeholder='password'
          {...register('repassword', {
            validate: validateEqualPasswords(getValues('password'))
          })}
          label='Repeat Password'
          error={errors.repassword}
        >
          <FormErrors err={errors.repassword} />
        </FormInput>
        {
          loading ? <LoadingButton /> : <Button type='submit' text='Login' />
        }
      </form>
    </>
  )
}

export default Register
