import { forwardRef } from 'react'
import { checkInput, checkLabel } from '../utils/stylesClasses'

const FormInput = forwardRef(
  ({ type, placeholder, onChange, onBlur, name, label, error, children }, ref) => {
    return (
      <div className='mb-6'>
        <label
          htmlFor='email'
          className={`block mb-2 text-sm font-medium ${checkLabel(error)}`}
        >
          {label}
        </label>
        <input
          className={`text-sm rounded-lg block w-full p-2.5 ${checkInput(error)}`}
          type={type}
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
        />
        {children}
      </div>
    )
  }
)

export default FormInput
