export const checkLabel = (error) => {
  return error
    ? 'text-red-700 dark:text-red-500'
    : 'text-gray-300 dark:text-gray-900'
}

export const checkInput = (error) => {
  return error
    ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-50dark:bg-red-100 dark:border-red-400'
    : 'bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-100 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500'
}

export const NavbarButtonStyle = (color) => {
  return `focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 text-white focus:ring-${color}-300 bg-${color}-700 hover:bg-${color}-800 dark:bg-${color}-600 dark:hover:bg-${color}-700 dark:focus:ring-${color}-800`
}
