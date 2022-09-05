import { Box, Stack } from '@chakra-ui/react'

import { ColorModeToggle } from '../ColorModeToggle'
import { ConnectWallet } from '../ConnectWallet'

const AppHeader = () => (
  <Box
    as="header"
    display="flex"
    p="2rem"
    borderBottom="1px"
    borderColor="gray.400"
    justifyContent="right"
  >
    <Stack align="center" direction="row" spacing="24px">
      <ColorModeToggle />
      <ConnectWallet />
    </Stack>
  </Box>
)

export default AppHeader
