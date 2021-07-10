import React from 'react'
import Button from '../src/Button'
import useButton from '../src/hooks/useButton'

export const ButtonExample0: React.FC = () => {
  const buttonExample = useButton()

  const onClick = () => {
    buttonExample.setIsLoading(true)
    buttonExample.setIsDisabled(true)
  }

  return (
    <div>
      <div>{buttonExample.isLoading}</div>
      <div>{buttonExample.isDisabled}</div>

      <Button {...buttonExample} onClick={onClick}>
        Example Button
      </Button>
    </div>
  )
}
