import React from 'react'
import { ColorThemeContext } from '../../../Utils/ReactContects/ColorThemeContext'
import { useContext } from 'react'


const colors = {
    blue: 'rgb(0, 94, 187)',
    darkRed: 'rgb(234, 23, 54)',
    green: 'rgb(48, 254, 118)',
    maroon: 'rgb(255, 0, 237)',
    violet: 'rgb(80, 0, 195)'
}


const Preloader = ({ className = null, width = '40px', style, ...styleArg }) => {
    
    const preloaderStyle = { width, ...styleArg, ...style }
    const colorTheme = useContext(ColorThemeContext)
    
    return (
        <svg svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" version="1.0" 
            width="64px" height="64px" viewBox="0 0 128 128" space="preserve" style={preloaderStyle} className={className}>
            <g>
                <linearGradient id="linear-gradient">
                    <stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor={colors[colorTheme]} />
                </linearGradient>
                <path d="M63.85 0A63.85 63.85 0 1 1 0 63.85 63.85 63.85 0 0 1 63.85 0zm.65 19.5a44 44 0 1 1-44 44 44 44 0 0 1 44-44z"
                    fill="url(#linear-gradient)" fillRule="evenodd" />
                <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1080ms" repeatCount="indefinite"></animateTransform>
            </g>
        </svg>
    )
}

export default Preloader