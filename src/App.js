import React from 'react'
import styled from 'styled-components'

const DivWrapper=styled.div`
  display: flex;
  
`;

const PrimaryButton=styled.button`
       background-color: skyblue;
        border: none;
        padding: 10px;
        margin: 10px;
`;

const DefaultButton=styled.button`
background-color: white;
border: 1px solid black;
margin: 10px;
`


const DashedButton=styled.button`
background-color: white;
border: 1px dashed black;
margin: 10px;
`

const TextButton=styled.button`
background-color: white;
border: none;
margin: 10px;
`

const LinkButton=styled.button`
background-color: white;
border: none;
color: skyblue;
margin: 10px;
`






const App = () => {
  return (
    <DivWrapper>
          <PrimaryButton>Primary Button</PrimaryButton>
          <DefaultButton>Default Button</DefaultButton>
          <DashedButton>Dashed Button</DashedButton>
          <TextButton>Text Button</TextButton>
          <LinkButton>Link Button</LinkButton>
    </DivWrapper>
  )
}

export default App