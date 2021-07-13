import React from 'react'

export type TextInputProps = unknown

const TextInput: React.FC<TextInputProps> = (props) => {
  return <input {...props} type="text" />
}

export default TextInput
