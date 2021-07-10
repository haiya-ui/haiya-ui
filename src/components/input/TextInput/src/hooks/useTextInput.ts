import React from 'react'
import { useState } from 'react'

type returnType = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function useTextInput(): returnType {
  const [value, setValue] = useState<string>('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return { value, onChange }
}
