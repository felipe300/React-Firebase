export const firebaseErrors = (code) => {
  if (code === 'auth/email-already-in-use') {
    return 'User already exists'
  }

  if (code === 'auth/invalid-email') {
    return 'Invalid email'
  }

  if (code === 'auth/user-not-found') {
    return 'User not found'
  }

  if (code === 'auth/wrong-password') {
    return 'Wrong password'
  }
}
