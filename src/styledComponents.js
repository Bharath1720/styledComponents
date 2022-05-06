import styled from 'styled-components'

export const Heading = styled.h1`
  color: #fff006;
  font-family: 'Robot';
`

export const CustomButton = styled.button`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
  color: ${props => props.color};
  border-radius: 4px;
  border: 2px solid #0070c1;
  background-color: ${props => props.bgColor};
`
