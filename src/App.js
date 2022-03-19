import React from "react";

//Dependencies
import styled from "styled-components";
import Clock from "react-live-clock";

const App = () => {
  return (
    <Container>
      <h1>
        <ClockComponent format={"h:mm:ssa"} interval={1000} ticking={true} />
      </h1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  background-color: #0d0010;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ClockComponent = styled(Clock)`
  color: white;
  font-weight: 900;
  font-size: 160px;
`;

export default App;
