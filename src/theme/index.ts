import { extendTheme, ThemeConfig, withDefaultColorScheme } from '@chakra-ui/react'

// Global style overrides
import { styles } from './styles'

// Foundational style overrides
// import borders from './foundations/borders'
import { colors } from './foundations/colors'

// Component style overrides
import { Button } from './components/button'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const overrides = {
  config,
  styles,
  colors,
  // borders,
  // Other foundational style overrides go here
  components: {
    Button,
    // Other components go here
  },
}

export default extendTheme(overrides, withDefaultColorScheme({ colorScheme: 'brand' }))
