import { Circle } from "better-react-spinkit";
import styled from "styled-components";

function Loading() {
  return (
    <Container>
      <LoginContainer>
        <Logo src="/chat_logo.png" alt="" />
        <Circle size={70} color="#231F20" />
      </LoginContainer>
    </Container>
  );
}

export default Loading;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  background-color: whitesmoke;
  border-radius: 10px;
  box-shadow: -5px 5px 10px -5px;
  align-items: center;
`;

const Logo = styled.img`
  height: 250px;
  width: 250px;
`;
