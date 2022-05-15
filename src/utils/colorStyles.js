const colorRed = () => {
  return 'focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 text-white focus:ring-red-300 bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
}

const colorBlue = () => {
  return 'focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 text-white focus:ring-blue-300 bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
}

const colorPurple = () => {
  return 'focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 text-white focus:ring-purple-300 bg-purple-700 hover:bg-purple-800 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800'
}

const colorGreen = () => {
  return 'focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 text-white focus:ring-green-300 bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
}

export const checkColor = (color) => {
  if (color === colorRed) {
    return colorRed()
  } else if (color === colorBlue) {
    return colorBlue()
  } else if (color === colorGreen) {
    return colorGreen()
  } else {
    return colorPurple()
  }
}
