import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.text};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme.colors.divider};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme.colors.text};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    thead,
    tbody tr {
      display: table;
      width: 100%;
      table-layout: fixed;
    }

    tbody {
      width: 100%;
      display: block;
      height: 407px;
      overflow: auto;

      &::-webkit-scrollbar {
        width: 6px;
        padding-right: 10px;
        z-index: 50;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.colors.placeholder};
        border-radius: 99999px;
      }
    }

    td {
      background-color: ${(props) => props.theme.colors.elements};
      border-top: 4px solid ${(props) => props.theme.colors['elements-dark']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow',
  green: 'green',
  red: 'red',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background-color: ${(props) =>
      props.theme.colors[STATUS_COLORS[props.statusColor]]};
  }
`
