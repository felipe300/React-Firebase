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
  const [copied, setCopied] = useState({})

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

  const handleCopyData = async (nanoid) => {
    await navigator.clipboard.writeText(pathUrl + nanoid)
    setCopied({ [nanoid]: true })
  }

  const pathUrl = window.location.href

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
        data.map(({ nanoid, origin }) => {
          return (
            <div key={nanoid} className='p-6 bg-white rounded-lg border border-gray-200dark:bg-white-800 dark:border-white-700 mb-1 mt-1'>
              <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:gray-white'>
                {pathUrl}
                {nanoid}
              </h5>
              <p className='mb-3 font-normal text-gray-700 dark:text-gray-500'>
                {origin}
              </p>
              <div className='flex space-x-3'>
                <Button type='button' text='Remove Url' loading={loading.deleteData ? true : undefined} color='red' onClick={() => handleDeleteData(nanoid)} />
                <Button type='button' text='Edit Url' loading={loading.updateData ? true : undefined} color='green' onClick={() => handleUpdateData(nanoid, origin)} />
                <Button type='button' text={copied[nanoid] ? 'Copied Url' : 'Copy Url'} loading={loading.updateData ? true : undefined} color='blue' onClick={() => handleCopyData(nanoid)} />
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default Home
