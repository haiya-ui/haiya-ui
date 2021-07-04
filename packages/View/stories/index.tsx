import React from 'react'
import View from '../src/View'

type Props = unknown

const index: React.FC<Props> = () => {
  return (
    <View
      sm={{
        p: 1,
        m: 2,
      }}
      xs={{
        p: 2,
        m: 3,
      }}>
      index
    </View>
  )
}

export default index
