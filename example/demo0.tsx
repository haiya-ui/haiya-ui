import React from 'react'
import Button from '../src/components/input/Button/src/Button'
import useButton from '../src/components/input/Button/src/hooks/useButton'
import useTextInput from '../src/components/input/TextInput/src/hooks/useTextInput'
import TextInput from '../src/components/input/TextInput/src/TextInput'
import Container from '../src/components/layout/Container'
import { Grid } from '../src/components/layout/Grid/src'

const Demo0: React.FC = () => {
  const loginButton = useButton()
  const usernameTextInput = useTextInput()
  const passwordTextInput = useTextInput()

  function login() {
    loginButton.setIsLoading(true)
    loginButton.setIsDisabled(true)

    console.log('login', usernameTextInput.value, passwordTextInput.value)
  }

  return (
    <Container>
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
