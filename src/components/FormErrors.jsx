const FormErrors = ({ err }) => {
  // <span className='font-medium'>{err.message}</span> Username already taken!
  return (
    <>
      {err &&
    (
      <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
        <span className='font-medium'>Oops! </span>
        *{err.message}
      </p>
    )}
    </>
  )
}

export default FormErrors
