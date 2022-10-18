import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { mount } from '@cypress/react'
import React from 'react'

import theme from '../../src/theme'

export const mountWithTheme = (ui: React.ReactElement) => {
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  )

  return mount(ui, { wrapper: Wrapper })
}
