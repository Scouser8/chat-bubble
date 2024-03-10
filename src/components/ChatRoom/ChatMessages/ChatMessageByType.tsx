import { useSelector } from "react-redux";
import { Message, RootState } from "../../types";
import { Avatar, Box, Typography } from "@mui/material";
import { chatMessageStyles } from "../../../styles/chatMessage.styles";
import { getUserAvatarText } from "../../../utils";

type Props = {
  message: Message;
};

const ChatMessageByType = (props: Props) => {
  const {
    message: {
      id: messageId,
      type,
      sender: { username = "", id: userId } = {},
      content,
    } = {},
  } = props;
  const selectedUser = useSelector((state: RootState) => state.user);
  const isFromCurrentUser = selectedUser.id === userId;
  return (
    <Box key={messageId} sx={chatMessageStyles(isFromCurrentUser)}>
      {!isFromCurrentUser && <Avatar>{getUserAvatarText(username)}</Avatar>}
      <Typography className="messageContent">{content}</Typography>
    </Box>
  );
};

export default ChatMessageByType;
