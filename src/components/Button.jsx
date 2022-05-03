const Button = ({ text, type }) => {
  return (
    <button type={type} className='focus:outline-none text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-500 dark:hover:bg-purple-600 dark:focus:ring-purple-800'>{text}</button>
  )
}

export default Button
