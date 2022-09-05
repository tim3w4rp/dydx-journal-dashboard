import { Spacer, Stack, Switch, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Stack align="center" direction="row" spacing="6px">
      <Switch alignItems="center" onChange={toggleColorMode} />
      <Spacer />
      {colorMode === 'light' ? (
        <MoonIcon boxSize={5} />
      ) : (
        <SunIcon boxSize={5} />
      )}
    </Stack>
  )
}

export default ColorModeToggle
