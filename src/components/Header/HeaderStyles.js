import styled from "styled-components";
import { GrClose } from "react-icons/gr";

export const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 13px;
  text-align: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  a {
    @media (max-width: 1200px) {
    display: none;
  }
  a:hover {
    background-color: #fff;
  }
`;

export const RightMenu = styled.div`
  a,
  p {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    cursor: pointer;
    display: inline-block;
    padding: 1rem;
    font-size: 13px;
  }
  a {
    @media (max-width: 1200px) {
      display: none;
    }
`;

export const BurgerNav = styled.div`
  text-decoration-line: none;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 2);

    a {
      font-weight: 600;
    }
  }
`;

export const CustomClose = styled(GrClose)`
  cursor: pointer;
`;

export const CustomWrapper = styled.div`
  text-decoration-line: none;
  display: flex;
  justify-content: flex-end;

  a {
    background-color: red;
    text-decoration-line: none;
  }
`;
