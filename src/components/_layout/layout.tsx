import React from 'react'
import Footer from '../Footer'
import Navigation from '../Navigation'
import styled from 'styled-components'


const Layout: React.FC<{ children: any }> = ({ children }) => {
    return (
        <MainWrapper>
            <Navigation/>
            <main>{children}</main>
            <Footer />
        </MainWrapper>
    )
}

export default Layout


const MainWrapper = styled.div`
min-height: 100vh;
display: flex;
flex-flow: column wrap;
margin-bottom: 5px;`