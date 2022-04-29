export const formValidate = (getValues) => {
  return {
    required: {
      value: true,
      message: 'Required field'
    },
    patternEmail: {
      value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
      message: 'Invalid email'
    },
    customLength: (min) => {
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
    validateEqualPasswords (getValues) {
      return {
        equals: (v) => v === getValues('password') || 'Passwords do not match'
      }
    }
  }
}