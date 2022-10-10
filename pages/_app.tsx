import type { AppProps } from 'next/app'
import { ChakraProvider, color, withDefaultColorScheme } from '@chakra-ui/react'
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

import Layout from '../components/Layout'
import '../styles/globals.scss'

const theme: ThemeConfig = extendTheme(
  withDefaultColorScheme({
    colorScheme: 'green',
    components: ['Button', 'Tabs'],
  }),
  {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
)

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default MyApp
