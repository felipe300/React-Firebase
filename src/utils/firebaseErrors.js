export const firebaseErrors = (code) => {
  if (code === 'auth/email-already-in-use') {
    return { code: 'email', message: 'User already exists' }
  }

  if (code === 'auth/invalid-email') {
    return { code: 'email', message: 'Invalid email' }
  }

  if (code === 'auth/user-not-found') {
    return { code: 'email', message: 'User not found' }
  }

  if (code === 'auth/wrong-password') {
    return { code: 'password', message: 'Wrong password' }
  }
}
