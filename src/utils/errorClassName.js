export const checkLabel = (error) => {
  return error
    ? 'text-red-700 dark:text-red-500'
    : 'text-gray-300 dark:text-gray-900'
}

export const checkInput = (error) => {
  return error
    ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-50dark:bg-red-100 dark:border-red-400'
    : 'bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
}
