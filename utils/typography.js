import ReactDOM from 'react-dom/server'
import React from 'react'
import Typography from 'typography'
import { GoogleFont, TypographyStyle } from 'react-typography'

const options = {
  googleFonts: [
    {
      name: 'Cutive Mono',
      styles: [ '400' ]
    },
    {
      name: 'Poppins',
      styles: [
        '300',
        '400',
        '600',
      ],
    },
    {
      name: 'Crimson Text',
      styles: [
        '400',
        '400i',
        '600',
        '600i'
      ],
    },
  ],
  headerFontFamily: ['Poppins', 'sans-serif'],
  headerWeight: '300',
  bodyFontFamily: ['Crimson Text', 'serif'],
  baseFontSize: '20px',
  baseLineHeight: 1.65,
  scale: 2.25,
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
  if (typeof document !== 'undefined') {
    const googleFonts = ReactDOM.renderToStaticMarkup(
      React.createFactory(GoogleFont)({ typography })
    )
    const head = document.getElementsByTagName('head')[0]
    head.insertAdjacentHTML('beforeend', googleFonts)
  }
}

export default typography
