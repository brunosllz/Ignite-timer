import { ChangeThemeButton, HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

import { Timer, Scroll, Sun, Moon } from 'phosphor-react'
import LogoIgnite from '../../assets/logo-ignite.svg'
import { useTheme } from '../../hooks/Theme'

export function Header() {
  const { toggleTheme, theme } = useTheme()

  return (
    <HeaderContainer>
      <div>
        <img src={LogoIgnite} alt="" />
        <ChangeThemeButton type="button" onClick={toggleTheme}>
          {theme.title === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
        </ChangeThemeButton>
      </div>

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
