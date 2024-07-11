import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Tag({ url, selected = false, children }) {
  return (
    <Wrapper selected={selected}>
      <Link to={url} className="link">#{children}</Link>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-block;
  font-size: 11px;
  margin: 2px;

  .link {
    padding: 3px;
    text-decoration: none;
    color: ${props => props.selected ? '#fff' : '#000'};
    background-color: ${props => props.selected ? '#444' : '#eee'};
  }
`
