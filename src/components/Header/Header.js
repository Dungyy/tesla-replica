import React, { useState } from "react";
import {
  Container,
  Menu,
  RightMenu,
  BurgerNav,
  CustomClose,
  CustomWrapper,
} from "./HeaderStyles";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <>
        <img
          style={{ width: "100px", marginLeft: "2rem" }}
          src="./images/logo.svg"
          alt=""
        />
      </>
      <Menu>
        <a href="https://www.tesla.com/models">Model S</a>
        <a href="https://www.tesla.com/model3">Model 3</a>
        <a href="https://www.tesla.com/modelx">Model X</a>
        <a href="https://www.tesla.com/modely">Model Y</a>
        <a href="https://www.tesla.com/solarroof">Solar Roof</a>
        <a href="https://www.tesla.com/solarpanels">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="https://shop.tesla.com/">Shop</a>
        <a href="https://auth.tesla.com/oauth2/v1/authorize?redirect_uri=https://www.tesla.com/teslaaccount/owner-xp/auth/callback&response_type=code&client_id=ownership&scope=offline_access%20openid%20ou_code%20email&audience=https%3A%2F%2Fownership.tesla.com%2F&locale=en-US">
          Account
        </a>
        <p onClick={() => setBurgerStatus(true)}>Menu</p>
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CustomWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CustomWrapper>
        <li>
          <a href="a">Existing Inventory</a>
        </li>
        <li>
          <a href="a">Used Inventory</a>
        </li>
        <li>
          <a href="a">Trade-in</a>
        </li>
        <li>
          <a href="a">Cybertruck</a>
        </li>
        <li>
          <a href="a">Roadaster</a>
        </li>
        <li>
          <a href="a">Semi</a>
        </li>
        <li>
          <a href="a">Charging</a>
        </li>
        <li>
          <a href="a">Powerwell</a>
        </li>
        <li>
          <a href="a">Commercial Energy</a>
        </li>
        <li>
          <a href="a">Powerwell</a>
        </li>
        <li>
          <a href="a">Utilities</a>
        </li>
        <li>
          <a href="a">Find Us</a>
        </li>
        <li>
          <a href="a">Support</a>
        </li>
        <li>
          <a href="a">Investor Relations</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;
