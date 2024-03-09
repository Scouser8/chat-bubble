import { Box, Typography } from "@mui/material";
import UserSelect from "./ChatRoomMessageCreator/UserSelect";

const ChatRoomHeader = () => {
  return (
    <Box className="header">
      <Typography variant="h6">Friends Room</Typography>
      <UserSelect />
    </Box>
  );
};

export default ChatRoomHeader;
