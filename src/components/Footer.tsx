import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      Coppyright by Hue Nguyen
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
text-align: center;
font-family: 'Pacifico';
color: ${({ theme }) => theme.colors.secondary};
`
