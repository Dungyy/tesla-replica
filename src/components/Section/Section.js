import React from "react";
import {
  Wrap,
  ItemText,
  ButtonGroup,
  LeftButton,
  RightButton,
  DownArrow,
  Buttons,
} from "./SectionStyles";
import Fade from "react-reveal/Fade";

const Section = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1 style={{ padding: "1rem", fontSize: "2.5rem" }}>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <a href="https://www.tesla.com/model3/design#overview">
              <LeftButton>{leftBtnText}</LeftButton>
            </a>
            <a href="https://www.tesla.com/inventory/new/m3?arrangeby=relevance&zip=56353&range=200">
              {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
            </a>
          </ButtonGroup>
        </Fade>
        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;
