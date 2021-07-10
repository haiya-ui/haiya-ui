import React from 'react'
import useTextInput from '../src/hooks/useTextInput'
import TextInput from '../src/TextInput'

export const TextInputExample0: React.FC = () => {
  const textInput = useTextInput()

  return <TextInput {...textInput}>index</TextInput>
}
