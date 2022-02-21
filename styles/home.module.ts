import styled from 'styled-components'

export const SizingSectionContainer = styled.div`
  left: 0%;
  top: 100%;
  width: 100%;
  min-height: 100%;
  position: absolute;
  background: ${({ theme }) => theme.scheme.foreground};
`
