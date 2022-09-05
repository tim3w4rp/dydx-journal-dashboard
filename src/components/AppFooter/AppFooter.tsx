import { Box } from '@chakra-ui/react'
import Image from 'next/image'

const AppFooter = () => (
  <Box
    as="footer"
    display="flex"
    p="2rem"
    borderTop="1px"
    borderColor="gray.400"
    justifyContent="center"
  >
    <Box
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      as="a"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Box as="p" style={{ fontSize: 100 }}></Box>
      Powered by
      <Box as="span" ml="0.5rem">
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </Box>
    </Box>
  </Box>
)

export default AppFooter
