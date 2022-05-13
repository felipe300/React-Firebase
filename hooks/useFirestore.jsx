import { useState } from 'react'
import { nanoid } from 'nanoid'

import { auth, db } from '../src/firebase'
import { collection, getDocs, query, where, setDoc, doc, deleteDoc } from 'firebase/firestore'

const useFirestore = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState()
  const [loading, setLoading] = useState({})

  const getData = async () => {
    try {
      setLoading(prev => ({ ...prev, getData: true }))
      const urlRef = collection(db, 'urls')
      const q = query(urlRef, where('uid', '==', auth.currentUser.uid))
      const querySnapshot = await getDocs(q)
      const dataDB = querySnapshot.docs.map((doc) => doc.data())
      setData(dataDB)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(prev => ({ ...prev, getData: false }))
    }
  }

  const addData = async (url) => {
    try {
      setLoading(prev => ({ ...prev, addData: true }))
      const newDoc = {
        enabled: true,
        nanoid: nanoid(6),
        origin: url,
        uid: auth.currentUser.uid
      }
      const docRef = doc(db, 'urls', newDoc.nanoid)
      await setDoc(docRef, newDoc)
      setData([...data, newDoc])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(prev => ({ ...prev, addData: false }))
    }
  }

  const removeData = async (nanoid) => {
    try {
      setLoading(prev => ({ ...prev, deleteData: true }))
      const docRef = doc(db, 'urls', nanoid)
      await deleteDoc(docRef)
      setData(data.filter(item => item.id !== nanoid))
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(prev => ({ ...prev, deleteData: false }))
    }
  }

  return {
    data, error, loading, addData, getData, removeData
  }
}

export default useFirestore
