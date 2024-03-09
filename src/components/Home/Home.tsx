import { Box, useTheme } from "@mui/material";
import chatWindowStyles from "../../styles/chatWindow.styles";
import ChatRoom from "../ChatRoom";
import ChatBubble from "../ChatBubble";
import { useState } from "react";
import chatRoomStyles from "../../styles/chatRoom.styles";

export const Home = () => {
  const theme = useTheme();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleIsChatOpen = () => setIsChatOpen((prevState) => !prevState);

  return (
    <Box sx={chatWindowStyles}>
      <Box sx={chatRoomStyles(theme)}>{isChatOpen && <ChatRoom />}</Box>
      <ChatBubble toggleIsChatOpen={toggleIsChatOpen} />
    </Box>
  );
};
