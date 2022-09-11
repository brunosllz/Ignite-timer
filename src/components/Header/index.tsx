import { ChangeThemeButton, HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

import { Timer, Scroll, Sun, Moon } from 'phosphor-react'
import LogoIgnite from '../../assets/logo-ignite.svg'
import { useTheme } from '../../hooks/Theme'
import { Tooltip } from '../Tooltip'

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
        <Tooltip title="Timer">
          <NavLink to="/">
            <Timer size={24} />
          </NavLink>
        </Tooltip>
        <Tooltip title="Histórico">
          <NavLink to="/history">
            <Scroll size={24} />
          </NavLink>
        </Tooltip>
      </nav>
    </HeaderContainer>
  )
}
