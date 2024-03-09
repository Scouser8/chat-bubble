import { Box } from "@mui/material";
import MessageInput from "./MessageInput";
import UserSelect from "./UserSelect";
import chatRoomMessageCreatorStyles from "../../../styles/chatRoomMessageCreator.styles";
import MessageActions from "./MessageActions";

const ChatRoomMessageCreator = () => {
  return (
    <Box sx={chatRoomMessageCreatorStyles}>
      <UserSelect />
      <MessageInput />
      <MessageActions />
    </Box>
  );
};

export default ChatRoomMessageCreator;
