import { Spacer, Stack, Switch, useColorMode } from '@chakra-ui/react'
import { SunIcon } from '@chakra-ui/icons'

const ColorModeToggle = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <Stack align="center" direction="row" spacing="4px">
      <Switch onChange={toggleColorMode}></Switch>
      <Spacer />
      <SunIcon boxSize={5} />
    </Stack>
  )
}

export default ColorModeToggle
