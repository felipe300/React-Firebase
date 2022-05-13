import { useEffect, useState } from 'react'
import useFirestore from '../../hooks/useFirestore'
import Button from '../components/Button'
import Title from '../components/Title'

const Home = () => {
  const { data, error, loading, addData, getData, removeData, updateData } = useFirestore()
  const [text, setText] = useState('')
  const [newOrignId, setNewOriginId] = useState()

  useEffect(() => {
    getData()
  }, [])

  if (loading.getData) return <p>Loading Data...</p>
  if (error) return <p>{error}</p>

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (newOrignId) {
      await updateData(newOrignId, text)
      setNewOriginId('')
      setText('')
      return
    }
    await addData(text)
    setText('')
  }

  const handleDeleteData = async (nanoid) => {
    await removeData(nanoid)
  }

  const handleUpdateData = async (nanoid, newUrl) => {
    console.log(`updateData: ${nanoid} ${newUrl}`)
    setText(newUrl)
    setNewOriginId(nanoid)
  }

  return (
    <>
      <Title title='Home' />

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Enter URL'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
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
              <Button type='button' text='Remove Url' loading={loading.deleteData ? true : undefined} color='red' onClick={() => handleDeleteData(nanoid)} />
              <Button type='button' text='Edit Url' loading={loading.updateData ? true : undefined} color='green' onClick={() => handleUpdateData(nanoid, origin)} />
            </div>
          )
        })
      }
    </>
  )
}

export default Home
