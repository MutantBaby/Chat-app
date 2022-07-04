import Head from "next/head";
import styled from "styled-components";
import ChatScreen from "../../components/ChatScreen";
import Sidebar from "../../components/Sidebar";

function Chat() {
  return (
    <Container>
      <Head>
        <title>This is Chat</title>
      </Head>

      <Sidebar />

      <ChatContainer>
        <ChatScreen />
      </ChatContainer>
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
`;

const ChatContainer = styled.div``;
