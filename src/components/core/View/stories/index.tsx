import React from 'react'
import { Div, View } from '../src'

export const Example0: React.FC = () => {
  return (
    <Div
      textCenter
      uppercase
      h={14}
      xs={{ p: 1, m: 2 }}
      md={{ p: 2, m: 3 }}
      xl={{ p: 6, m: 8 }}
      xxl={{ p: 8, m: 10 }}>
      Content
    </Div>
  )
}

export const Example1: React.FC = () => {
  return <View p={4}></View>
}
