import React from 'react'
import { useState } from 'react'

type ReturnType = {
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function useInput(): ReturnType {
  const [value, setValue] = useState<string>('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return { value, onChange }
}
