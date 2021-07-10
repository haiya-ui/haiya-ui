# Haiya

Haiya is a react UI framework to fast build your own business.

- easy to create your own theme.
- component hooks.
- typescript support.
- responsive design friendly.
- easy extend component.

## Customized themes

Easy to expand theme, simple configuration instantly complete your own theme.

```ts
const theme = createTheme({
  primary: '#00bcd4',
  borderWidth: 1,
  borderRadius: 4,
  gap: 2,
})
```

It will be applied to all components, button, input, textarea, select, etc. Of course, you can also customize component independently.

## Write style like tailwindcss

But we won't put all the style into the class, that's not good for reading and project maintenance.

```jsx
export default const Example0 = () => {
  return (
    <Div
      p={2}
      m={2}
      sm={ p: 4 m: 6 }
      md={ p: 8 m: 10 }>
      Content
    </Div>
  )
}
```

```jsx
export default const Example1 = () => {
  return (
    <Div m={ sm: 1, md: 2, xl: 3 }>
      Content
    </Div>
  )
}
```

## Rich layout methods

### Gird

```jsx
export const GridExample0 = () => {
  return (
    <Grid gap={2} columns={2} row={3}>
      <GridItem>div</GridItem>
      <GridItem>div</GridItem>
      <GridItem>div</GridItem>
      <GridItem>div</GridItem>
      <GridItem>div</GridItem>
      <GridItem>div</GridItem>
    </Grid>
  )
}
```

### Flex

```jsx
export const FlexExample0 = () => {
  return (
    <Flex
      md={{
        direction: 'column',
        justify: 'center',
        items: 'center',
      }}
      xl={{ direction: 'row' }}>
      <FlexItem flex={1}>div</FlexItem>
      <div>div</div>
    </Flex>
  )
}
```

### Col & Row

Traditionally, we use `<Col>` and `<Row>` to build our layout.

```jsx
export const ColRowExample0 = () => {
  return (
    <Row columns={12} gap={2} align="center">
      <Col sm={12} md={6} xl={3}></Col>
      <Col sm={12} md={6} xl={3}></Col>
      <Col sm={12} md={6} xl={3}></Col>
    <Row>
  )
}
```

### Center

`<Center>` will auto align the child element to center.

```jsx
export const CenterExample0 = () => {
  return <Center>Something</Center>
}
```

## Hooks

We provide hooks for every component, you can use them to extend component.

```jsx
export const TextInputExample0: React.FC = () => {
  const textInput = useTextInput()

  return <TextInput {...textInput}>index</TextInput>
}
```

```jsx
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
```

## Typescript support

`Haiya` is created with typescript, so you can use it with typescript too.

## Demo

```jsx
import React from 'react'
import { Button, useButton } from '@haiya-ui/input/Button'
import { TextInput, useTextInput } from '@haiya-ui/input/TextInput'
import Container from '@haiya-ui/layout/Container'
import { Grid } from '@haiya-ui/layout/Grid/src'
import { useTheme } from '@haiya-ui/theme'

const Demo0: React.FC = () => {
  const theme = useTheme()
  const { gray100, gray200 } = theme.colors
  const loginButton = useButton()
  const usernameTextInput = useTextInput()
  const passwordTextInput = useTextInput()

  function login() {
    loginButton.setIsLoading(true)
    loginButton.setIsDisabled(true)

    console.log('login', usernameTextInput.value, passwordTextInput.value)
  }

  return (
    <Container bg={{ sm: gray100, md: gray200 }}>
      <Grid columns={{ sm: 1, md: 2, xl: 3 }} gap={3}>
        <TextInput name="username" {...usernameTextInput} />

        <TextInput type="password" name="password" {...passwordTextInput} />

        <Button
          variant="primary"
          mt={{ sm: 2, xl: 0 }}
          {...loginButton}
          onClick={login}>
          Login
        </Button>
      </Grid>
    </Container>
  )
}

export default Demo0
```
