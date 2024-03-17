import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../types";
import ChatMessageByType from "./ChatMessageByType";
import { chatMessagesContainerStyles } from "../../../styles/chatMessage.styles";
import { useEffect, useRef } from "react";

const ChatMessages = () => {
  const bottomRef = useRef(null);
  const { messages } = useSelector((state: RootState) => state.messages);
  const chatMessages = messages?.map((msg) => (
    <ChatMessageByType message={msg} />
  ));
  useEffect(() => {
    // 👇️ scroll to bottom every time messages change
    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <Container sx={chatMessagesContainerStyles}>
      {chatMessages}
      <div ref={bottomRef} />
    </Container>
  );
};

export default ChatMessages;
