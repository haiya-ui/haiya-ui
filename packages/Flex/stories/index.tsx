import React from 'react'
import Flex from '../src/Flex'

export const index: React.FC = () => {
  return (
    <Flex
      S={{
        direction: 'column',
        justifyContent: 'center',
        itemsContent: 'center',
      }}
      M={{ direction: 'row' }}>
      index
    </Flex>
  )
}
