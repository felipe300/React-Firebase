import { useState } from 'react'

import { auth, db } from '../src/firebase'
import { collection, getDocs, query, where } from 'firebase/firestore'

const useFirestore = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    try {
      setLoading(true)
      const urlRef = collection(db, 'urls')
      const q = query(urlRef, where('uid', '==', auth.currentUser.uid))
      const querySnapshot = await getDocs(q)
      const dataDB = querySnapshot.docs.map((doc) => doc.data())
      setData(dataDB)
    } catch (err) {
      console.log(err)
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    data, error, loading, getData
  }
}

export default useFirestore
