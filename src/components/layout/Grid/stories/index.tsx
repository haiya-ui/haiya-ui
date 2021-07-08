import React from 'react'
import { Grid, GridItem } from '../src'

export const GridExample0: React.FC = () => {
  return (
    <Grid
      gap={2}
      columns={2}
      row={3}
      md={{ column: 3, row: 2 }}
      xl={{ column: 1, row: 6 }}>
      <GridItem colStart={1} colEnd={2}>
        div
      </GridItem>
      <GridItem>div</GridItem>
      <GridItem
        rowStart={1}
        rowSpan={3}
        md={{
          rowSpan: 2,
        }}>
        div
      </GridItem>
      <GridItem>div</GridItem>
    </Grid>
  )
}

export const GridExample1: React.FC = () => {
  return (
    <Grid gap={2} size="2-3" md={{ size: '3-2' }} xs={{ size: '1-6' }}>
      <GridItem col="1-2" md={{ col: '0-1' }}>
        div
      </GridItem>
      <GridItem>div</GridItem>
      <GridItem
        rowStart={1}
        rowSpan={3}
        md={{
          rowSpan: 2,
        }}>
        div
      </GridItem>
      <GridItem>div</GridItem>
    </Grid>
  )
}

export const GridExample2: React.FC = () => {
  return (
    <Grid
      areas={[
        // 200       1fr
        ['header', 'header'], // 100
        ['side', 'content'], // auto
        ['footer', 'footer'], // 100
      ]}
      columns={[200, '1fr']}
      rows={[100, 'auto', 100]}>
      <GridItem area="header">Header</GridItem>

      <GridItem area="side">Side</GridItem>
      <GridItem area="content">Content</GridItem>

      <GridItem area="footer">Footer</GridItem>
    </Grid>
  )
}
