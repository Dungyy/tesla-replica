import React, { useState } from 'react'
import {Container, Menu, RightMenu, BurgerNav, CustomMenu, CustomClose, CustomWrapper } from './HeaderStyles'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false)    

    return (
        <Container>
            <>
                <img src="./images/logo.svg" alt="" />
            </>
            <Menu>
                <a href="a">Model S</a>
                <a href="a">Model 3</a>
                <a href="a">Model X</a>
                <a href="a">Model Y</a>
            </Menu>
            <RightMenu>
                <a href="a">Shop</a>
                <a href="a">Tesla Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)} />
            </RightMenu>
            <BurgerNav show={burgerStatus}>
            <CustomWrapper>
                <CustomClose onClick={() => setBurgerStatus(false)} /> 
            </CustomWrapper>    
                <li><a href='a'>Existing Inventory</a></li>
                <li><a href='a'>Used Inventory</a></li>
                <li><a href='a'>Trade-in</a></li>
                <li><a href='a'>Cybertruck</a></li>
                <li><a href='a'>Roadaster</a></li>
                <li><a href='a'>Semi</a></li>
                <li><a href='a'>Charging</a></li>
                <li><a href='a'>Powerwell</a></li>
                <li><a href='a'>Commercial Energy</a></li>
                <li><a href='a'>Powerwell</a></li>
                <li><a href='a'>Utilities</a></li>
                <li><a href='a'>Find Us</a></li>
                <li><a href='a'>Support</a></li>
                <li><a href='a'>Investor Relations</a></li>
            </BurgerNav>
        </Container>
    )
}

export default Header

