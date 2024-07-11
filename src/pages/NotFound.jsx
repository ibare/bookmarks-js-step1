import styled from 'styled-components'

export default function NotFound() {
  return (
    <Wrapper>
      <span className="code">404</span>
      <span className="message">Not Found</span>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  margin: 50px;

  .code {
    color: #555;
    font-size: 124px;
    font-weight: 700;
  }
  
  .message {
    color: #aaa; 
    font-size: 24px;
    margin-left: 20px;
  }

`