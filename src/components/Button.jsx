const Button = ({ text, type }) => {
  return (
    <button type={type} className='focus:outline-none text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800'>{text}</button>
  )
}

export default Button
