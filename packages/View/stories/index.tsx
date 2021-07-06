import React from 'react'
import View from '../src/View'

export const Example0: React.FC = () => {
  return (
    <View
      p={1}
      m={1}
      S={{ p: 1, m: 2, fontSize: 12 }}
      M={{ p: 2, m: 3, fontSize: 24 }}
      L={{ p: 6, m: 8 }}
      XXL={{ p: 8, m: 10 }}
      XXXL={{ p: 10, m: 12 }}>
      Content
    </View>
  )
}

export const Example1: React.FC = () => {
  return <View></View>
}
