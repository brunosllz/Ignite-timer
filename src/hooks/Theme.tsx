import {
  createContext,
  ReactNode,
  useEffect,
  useState,
  useContext,
} from 'react'
import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components'
import light from '../styles/theme/light'

type ThemeName = 'light' | 'dark' | string
interface ThemeContextType {
  theme: ThemeName
  setTheme: (name: ThemeName) => void
}
interface ThemeProviderProps {
  children: ReactNode
  initialTheme?: string
}

// function getInitialTheme() {
//   if (typeof window !== 'undefined' && window.localStorage) {
//     const storedPrefs = window.localStorage.getItem('@ignite-timer:colorTheme')
//     if (typeof storedPrefs === 'string') {
//       return storedPrefs
//     }

//     const userMedia = window.matchMedia('(prefers-color-scheme:dark)')
//     if (userMedia.matches) {
//       return 'dark'
//     }
//   }

//   return 'light'
// }

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType)

function ThemeProvider({ initialTheme, children }: ThemeProviderProps) {
  const [theme, setTheme] = useState('')

  // function rawSetTheme(theme: string) {
  //   const root = window.document.documentElement
  //   const isDark = theme === 'dark'

  //   root.classList.remove(isDark ? 'light' : 'dark')
  //   root.classList.add(theme)

  //   localStorage.setItem('@ignite-timer:colorTheme', theme)
  // }

  // if (initialTheme) {
  //   rawSetTheme(initialTheme)
  // }

  // useEffect(() => {
  //   rawSetTheme(theme)
  // }, [theme])

  return (
    <ThemeProviderStyledComponents theme={light}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProviderStyledComponents>
  )
}

function useTheme() {
  const context = useContext(ThemeContext)

  return context
}

export { ThemeProvider, useTheme }
