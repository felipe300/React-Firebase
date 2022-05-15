export const formValidate = () => {
  return {
    required: {
      value: true,
      message: 'Required field'
    },
    patternEmail: {
      value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
      message: 'Invalid email'
    },
    patternURL: {
      // value: /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/,
      value: /^https?:\/\/[\w-]+(\.[\w-]+)+[/#?]?.*$/,
      message: 'Invalid URL'
    },
    customLength (min) {
      return {
        minLength: {
          value: min,
          message: `Min length ${min}`
        }
      }
    },
    minLength: {
      value: 6,
      message: 'Min length 6 characters'
    },
    validateTrim: {
      trim: (v) => {
        if (!v.trim()) {
          return 'Whitespace is not allowed'
        }
        return true
      }
    },
    validateEqualPasswords (value) {
      return {
        equals: (v) => v === value || 'Passwords do not match'
      }
    }
  }
}
