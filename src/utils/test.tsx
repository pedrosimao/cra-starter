import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { render, RenderOptions } from '@testing-library/react'
import React, { FC, ReactElement } from 'react'

// import {TranslationProvider} from 'my-i18n-lib'
// import defaultStrings from 'i18n/en-x-default'
import theme from 'src/theme'

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => (
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    {/* <TranslationProvider messages={defaultStrings}> */}
    {children}
    {/* </TranslationProvider> */}
  </ChakraProvider>
)

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
