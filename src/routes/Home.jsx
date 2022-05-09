import { useEffect } from 'react'
import useFirestore from '../../hooks/useFirestore'
import Title from '../components/Title'

const Home = () => {
  const { data, error, loading, getData } = useFirestore()

  useEffect(() => {
    getData()
  }, [])

  if (loading) return <p>Loading Data</p>
  if (error) return <p>{error}</p>

  return (
    <>
      <Title title='Home' />
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
