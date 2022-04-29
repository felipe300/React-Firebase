import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase'

export const UserContext = createContext()

function UserProvider ({ children }) {
  const [user, setUser] = useState(false)

  useEffect(() => {
    const unsuscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, uid, photoUrl, displayName } = user.email
        setUser({ email, uid, photoUrl, displayName })
      } else {
        setUser(null)
      }
    })

    return () => unsuscribe()
  }, [])

  const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password)

  const loginUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password)

  const signOutUser = () => auth.signOut(auth)

  return (
    <UserContext.Provider
      value={{ user, setUser, registerUser, loginUser, signOutUser }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
