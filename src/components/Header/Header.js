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
      <div className="img">
        <img
          style={{ width: "111px", height: "17px"}}
          src="./images/logo.svg"
          alt=""
        />
      </div>
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
        <div style={{textDecoration: "none"}}>
          <li>
            <a href="https://www.tesla.com/inventory/new/m3">Existing Inventory</a>
          </li>
          <li>
            <a href="https://www.tesla.com/inventory/used/m3">Used Inventory</a>
          </li>
          <li>
            <a href="https://www.tesla.com/tradein">Trade-in</a>
          </li>
          <li>
            <a href="https://www.tesla.com/drive">Test Drive</a>
          </li>
          <li>
            <a href="https://www.tesla.com/cybertruck">Cybertruck</a>
          </li>
          <li>
            <a href="https://www.tesla.com/roadster">Roadaster</a>
          </li>
          <li>
            <a href="https://www.tesla.com/semi">Semi</a>
          </li>
          <li>
            <a href="https://www.tesla.com/charging">Charging</a>
          </li>
          <li>
            <a href="https://www.tesla.com/powerwall">Powerwell</a>
          </li>
          <li>
            <a href="https://www.tesla.com/commercial">Commercial Energy</a>
          </li>
          <li>
            <a href="https://www.tesla.com/powerwall">Powerwell</a>
          </li>
          <li>
            <a href="https://www.tesla.com/utilities">Utilities</a>
          </li>
          <li>
            <a href="https://www.tesla.com/findus?v=2&bounds=51.39232576966143%2C-65.51660275%2C26.358366992243717%2C-133.01660275&zoom=5&filters=store%2Cservice%2Csupercharger%2Cdestination%20charger%2Cbodyshop%2Cparty">Find Us</a>
          </li>
          <li>
            <a href="https://www.tesla.com/support">Support</a>
          </li>
          <li>
            <a href="https://ir.tesla.com/#tab-quarterly-disclosure">Investor Relations</a>
          </li>
        </div>
      </BurgerNav>
    </Container>
  );
};

export default Header;
