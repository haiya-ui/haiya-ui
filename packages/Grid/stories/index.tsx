import React from 'react'
import { Grid, GridItem } from '../src'

export const GridExample0: React.FC = () => {
  return (
    <Grid
      gap={2}
      cols={2}
      row={3}
      md={{ column: 3, row: 2 }}
      xs={{ column: 1, row: 6 }}>
      <GridItem colStart={1} colEnd={2}>
        index
      </GridItem>
      <GridItem>index</GridItem>
      <GridItem
        rowStart={1}
        rowSpan={3}
        md={{
          rowSpan: 2,
        }}>
        index
      </GridItem>
      <GridItem>index</GridItem>
    </Grid>
  )
}

export const GridExample1: React.FC = () => {
  return (
    <Grid
      areas={[
        ['header', 'header'],
        ['side', 'content'],
        ['footer', 'footer'],
      ]}
      cols={[200, '1fr']}
      rows={[100, 'auto', 100]}>
      <GridItem area="header">Header</GridItem>

      <GridItem area="side">Side</GridItem>
      <GridItem area="content">Content</GridItem>

      <GridItem area="footer">Footer</GridItem>
    </Grid>
  )
}
