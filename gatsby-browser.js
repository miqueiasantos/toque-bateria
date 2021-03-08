import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'

import 'normalize.css'

import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/dm-sans/700.css'

import 'bootstrap/dist/css/bootstrap-grid.min.css'

export const wrapRootElement = ({ element }) => (
  <ParallaxProvider>{element}</ParallaxProvider>
)
