import { NavbarButtonStyle } from '../utils/stylesClasses'
// import { checkColor } from '../utils/colorStyles'
import LoadingButton from './ButtonLoading'

const Button = ({ color = 'purple', loading, onClick, text, type }) => {
  if (loading) return <LoadingButton />

  return (
    <button
      onClick={onClick}
      type={type}
      className={NavbarButtonStyle(color)}
      // className={checkColor(color)}
    >
      {text}
    </button>
  )

  // focus:outline-none text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800

  // `focus:outline-none text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-900`
}

export default Button
