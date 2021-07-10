import { useState } from 'react'

type returnType = {
  isDisabled: boolean
  isLoading: boolean
  isFocused: boolean
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setIsDisabled: React.Dispatch<React.SetStateAction<boolean>>
  onFocus: () => void
  onBlur: () => void
}

export default function useButton(): returnType {
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  function onFocus() {
    setIsFocused(true)
  }

  function onBlur() {
    setIsFocused(false)
  }

  return {
    isDisabled,
    isLoading,
    isFocused,
    setIsLoading,
    setIsDisabled,
    onFocus,
    onBlur,
  }
}
