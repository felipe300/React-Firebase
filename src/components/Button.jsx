import { NavbarButtonStyle } from '../utils/stylesClasses'
import LoadingButton from './ButtonLoading'

const Button = (props) => {
  if (props.loading) return <LoadingButton />

  return (
    <button
      {...props}
      className={NavbarButtonStyle('blue')}
    >
      {props.text}
    </button>
  )

  // focus:outline-none text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800

  // `focus:outline-none text-white bg-${color}-700 hover:bg-${color}-800 focus:ring-4 focus:ring-${color}-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-900`
}

export default Button
