import styled from "styled-components";
import { Button } from "@material-ui/core";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";

function Login() {
  const signIn = () => {
    signInWithPopup(auth, provider).catch(alert);
  };

  return (
    <Container>
      <Head>
        <title>Login</title>
      </Head>

      <LoginContainer>
        <Logo src="/chat_logo.png" />
        <Button
          onClick={signIn}
          variant="outlined"
          style={{ backgroundColor: "#231F20", color: "white" }}
        >
          Sign in with Google
        </Button>
      </LoginContainer>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Head = styled.div``;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  background-color: whitesmoke;
  border-radius: 10px;
  box-shadow: -5px 5px 10px -5px;
`;

const Logo = styled.img`
  height: 250px;
  width: 250px;
  margin-bottom: 50px;
`;
