import { useEffect, useState } from 'react'
import useFirestore from '../../hooks/useFirestore'
import Button from '../components/Button'
import Title from '../components/Title'

const Home = () => {
  const { data, error, loading, addData, getData } = useFirestore()
  const [text, setText] = useState('')

  useEffect(() => {
    getData()
  }, [])

  if (loading.getData) return <p>Loading Data...</p>
  if (error) return <p>{error}</p>

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addData(text)
    setText('')
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
        <Button type='submit' text='Add Url' loading={loading.addData ? true : undefined} />

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
            </div>
          )
        })
      }
    </>
  )
}

export default Home
