import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../types";
import ChatMessageByType from "./ChatMessageByType";
import { chatMessagesContainerStyles } from "../../../styles/chatMessage.styles";

const ChatMessages = () => {
  const { messages } = useSelector((state: RootState) => state.messages);
  const chatMessages = messages?.map((msg) => (
    <ChatMessageByType message={msg} />
  ));
  return <Container sx={chatMessagesContainerStyles}>{chatMessages}</Container>;
};

export default ChatMessages;
