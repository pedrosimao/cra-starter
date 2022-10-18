import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import App from 'src/App'
// import reportWebVitals from "./reportWebVitals";
import theme from 'src/theme'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </StrictMode>,
)

// reportWebVitals();
