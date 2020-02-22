import { createContext }  from 'react'

const {
    Provider : ColorThemeProvider, 
    Consumer :  ColorThemeConsumer
} = createContext()

export {ColorThemeProvider, ColorThemeConsumer}