import { ChangeThemeButton, HeaderContainer } from './styles'
import { NavLink } from 'react-router-dom'

import { Timer, Scroll, Sun } from 'phosphor-react'
import LogoIgnite from '../../assets/logo-ignite.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div>
        <img src={LogoIgnite} alt="" />
        <ChangeThemeButton type="button">
          <Sun size={24} />
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
