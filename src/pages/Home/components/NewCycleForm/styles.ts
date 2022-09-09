import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.text};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme.colors.placeholder};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;

  color: ${(props) => props.theme.colors.text};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme.colors.green};
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.placeholder};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;
`
