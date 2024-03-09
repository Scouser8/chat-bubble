import { Box } from "@mui/material";
import MessageInput from "./MessageInput";
import chatRoomMessageCreatorStyles from "../../../styles/chatRoomMessageCreator.styles";
import MessageActions from "./MessageActions";

const ChatRoomMessageCreator = () => {
  return (
    <Box sx={chatRoomMessageCreatorStyles}>
      <MessageInput />
      <MessageActions />
    </Box>
  );
};

export default ChatRoomMessageCreator;
