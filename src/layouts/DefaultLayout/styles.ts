import styled from 'styled-components'

export const LayoutContainer = styled.div`
  display: flex;
  width: 74rem;
  height: cal(100vh - 10remm);
  margin: 5rem auto;
  padding: 2.5rem;

  background-color: ${(props) => props.theme.colors['elements-dark']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
