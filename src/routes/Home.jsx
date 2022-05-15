import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import useFirestore from '../../hooks/useFirestore'
import Button from '../components/Button'
import FormErrors from '../components/FormErrors'
import FormInput from '../components/FormInput'
import Title from '../components/Title'
import { firebaseErrors } from '../utils/firebaseErrors'
import { formValidate } from '../utils/formValidate'

const Home = () => {
  const { data, error, loading, addData, getData, removeData, updateData } = useFirestore()
  const [newOrignId, setNewOriginId] = useState()

  const { required, patternUrl } = formValidate()

  const {
    register,
    handleSubmit,
    resetField,
    setError,
    setValue,
    formState: { errors }
  } = useForm()

  useEffect(() => {
    getData()
  }, [])

  if (loading.getData) return <p>Loading Data...</p>
  if (error) return <p>{error}</p>

  const onSubmit = async ({ url }) => {
    try {
      if (newOrignId) {
        await updateData(newOrignId, url)
        setNewOriginId('')
      } else {
        await addData(url)
      }
      resetField('url')
    } catch (err) {
      const { code, message } = firebaseErrors(err.code)
      setError(code, { message })
    }
  }

  const handleDeleteData = async (nanoid) => {
    await removeData(nanoid)
  }

  const handleUpdateData = async (nanoid, newUrl) => {
    setValue('url', newUrl)
    setNewOriginId(nanoid)
  }

  return (
    <>
      <Title title='Home' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          type='text'
          placeholder='www.example.com/user/123'
          {...register('url', {
            required,
            pattern: patternUrl
          })}
          label='URL'
          error={errors.url}
        >
          <FormErrors err={errors.url} />
        </FormInput>
        {
          newOrignId ? (<Button type='submit' text='Edit Url' loading={loading.updateData ? true : undefined} color='green' />) : (<Button type='submit' text='Add Url' loading={loading.addData ? true : undefined} color='blue' />)
        }

      </form>
      {
        data.map(({ enabled, nanoid, origin, uid, url }) => {
          return (
            <div key={nanoid}>
              <p>{nanoid}</p>
              <p>{origin}</p>
              <p>{uid}</p>
              <p>{url}</p>
              <p>{enabled ? 'TRUE' : 'FALSE'}</p>
              <div className='flex space-x-3'>
                <Button type='button' text='Remove Url' loading={loading.deleteData ? true : undefined} color='red' onClick={() => handleDeleteData(nanoid)} />
                <Button type='button' text='Edit Url' loading={loading.updateData ? true : undefined} color='green' onClick={() => handleUpdateData(nanoid, origin)} />
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Home
