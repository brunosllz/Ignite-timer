import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.5rem;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

interface StopCountDownButtonProps {
  isDark?: boolean
}

const BaseCountDownButton = styled.button<StopCountDownButtonProps>`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;

  cursor: pointer;

  color: ${({ theme, isDark }) =>
    isDark ? theme.colors.text : theme.colors.white};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`

export const StartCountDownButton = styled(BaseCountDownButton)`
  background-color: ${(props) => props.theme.colors.green};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors['green-dark']};
  }
`

export const StopCountDownButton = styled(BaseCountDownButton)`
  background-color: ${(props) => props.theme.colors.red};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors['red-dark']};
  }
`
