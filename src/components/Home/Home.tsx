import { Box } from "@mui/material";
import chatWindowStyles from "../../styles/chatWindow.styles";
import ChatRoom from "../ChatRoom";
import ChatBubble from "../ChatBubble";

export const Home = () => {
  return (
    <Box sx={chatWindowStyles}>
      <ChatRoom />
      <ChatBubble />
    </Box>
  );
};
