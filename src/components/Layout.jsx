import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
import Nav from './Nav'

export default function Layout() {
  return (
    <Wrapper>
      <Nav />
      <Content>
        <Outlet />
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`

const Content = styled.div`
  margin-top: 20px;
`
