import { Box } from "@mui/material";
import ChatRoomHeader from "./ChatRoomHeader";
import ChatMessages from "./ChatMessages";
import ChatRoomMessageCreator from "./ChatRoomMessageCreator";

const ChatRoom = () => {
  return (
    <Box className="chatRoom">
      <ChatRoomHeader />
      <ChatMessages />
      <ChatRoomMessageCreator />
    </Box>
  );
};

export default ChatRoom;
