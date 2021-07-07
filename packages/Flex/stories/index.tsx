import React from 'react'
import Flex from '../src/Flex'

export const index: React.FC = () => {
  return (
    <Flex
      md={{
        direction: 'column',
        justify: 'center',
        items: 'center',
      }}
      xl={{ direction: 'row' }}>
      index
    </Flex>
  )
}
