import React from "react";
import styled from "styled-components";
import Section from "./Section/Section";
import Data from "./Data";

const Home = () => {
  return (
    <Container>
      {Data.map((sectionInfo) => (
        <Section
          key={sectionInfo.key}
          title={sectionInfo.title}
          description={sectionInfo.description}
          backgroundImg={sectionInfo.backgroundImg}
          leftBtnText={sectionInfo.leftBtnText}
          rightBtnText={sectionInfo.rightBtnText}
        />
      ))} 
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
