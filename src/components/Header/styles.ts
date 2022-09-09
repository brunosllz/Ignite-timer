import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    gap: 1rem;

    align-items: center;
    justify-content: center;
  }

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      color: ${(props) => props.theme.colors.title};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.colors.green};
      }

      &.active {
        color: ${(props) => props.theme.colors.green};
      }
    }
  }
`
export const ChangeThemeButton = styled.button`
  background-color: transparent;
  border: 0;

  color: ${(props) => props.theme.colors.title};

  padding: 0.5rem;
  cursor: pointer;
`
