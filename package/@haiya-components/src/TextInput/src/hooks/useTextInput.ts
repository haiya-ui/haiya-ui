import React, { useState } from 'react'

type returnType = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

type Props = {
  [key: string]: unknown
}

export default function useTextInput(props?: Props): returnType {
  const [value, setValue] = useState<string>('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return { value, onChange, ...props }
}

export function useInputValueState() {
  const [value, setValue] = useState<string>('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return { value, setValue, onChange }
}
