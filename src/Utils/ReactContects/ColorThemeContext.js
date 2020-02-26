import { createContext }  from 'react'

const ColorThemeContext = createContext()

const {Provider : ColorThemeProvider} = ColorThemeContext

export {ColorThemeProvider, ColorThemeContext}