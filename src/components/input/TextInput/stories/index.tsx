import React, { ChangeEventHandler, HTMLAttributes } from 'react'
import useInput from '../src/hooks/useInput'
import useTextInput from '../src/hooks/useTextInput'
import TextInput from '../src/TextInput'

export const TextInputExample0: React.FC = () => {
  const textInput = useTextInput()

  return <TextInput {...textInput}>index</TextInput>
}

export const TextInputExample1: React.FC = () => {
  const input = useInput()

  return <input {...input} />
}

export interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
  accept?: string
  alt?: string
  autoComplete?: string
  autoFocus?: boolean
  capture?: boolean | string // https://www.w3.org/TR/html-media-capture/#the-capture-attribute
  checked?: boolean
  crossOrigin?: string
  disabled?: boolean
  enterKeyHint?:
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send'
  form?: string
  formAction?: string
  formEncType?: string
  formMethod?: string
  formNoValidate?: boolean
  formTarget?: string
  height?: number | string
  list?: string
  max?: number | string
  maxLength?: number
  min?: number | string
  minLength?: number
  multiple?: boolean
  name?: string
  pattern?: string
  placeholder?: string
  readOnly?: boolean
  required?: boolean
  size?: number
  src?: string
  step?: number | string
  type?: string
  value?: string | ReadonlyArray<string> | number
  width?: number | string

  onChange?: ChangeEventHandler<T>
}
