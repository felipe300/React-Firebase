const FormErrors = ({ err }) => {
  return <>{err && <span>{err.message}</span>}</>
}

export default FormErrors
