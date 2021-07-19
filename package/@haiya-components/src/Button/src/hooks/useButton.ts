import { useRef, useState } from 'react'

export type useButtonProps = {
  ref: React.MutableRefObject<HTMLButtonElement>
}

export default function useButton(props?: useButtonProps) {
  const [isDisabled, setIsDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const ref = useRef(props.ref)

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
    ref,
  }
}
