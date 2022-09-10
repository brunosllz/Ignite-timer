import { createContext, ReactNode, useContext } from 'react'
import { ThemeProvider as ThemeProviderStyledComponents } from 'styled-components'
import light from '../styles/theme/light'
import dark from '../styles/theme/dark'
import { usePersistedState } from './usePersistedState'

type ThemeName = typeof light

interface ThemeContextType {
  theme: ThemeName
  toggleTheme: () => void
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

function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = usePersistedState('@ignite-timer:theme', light)

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProviderStyledComponents theme={theme}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
