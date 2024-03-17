import { useSelector } from "react-redux";
import { Message, RootState } from "../../types";
import { Avatar, Box, Typography } from "@mui/material";
import { chatMessageStyles } from "../../../styles/chatMessage.styles";
import { getUserAvatarText } from "../../../utils";
import { MessageTypes } from "../../../constants";

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
      {type === MessageTypes.TEXT && (
        <Typography className="messageContent">{content as string}</Typography>
      )}
      {type === MessageTypes.IMAGE && (
        <img
          src={URL.createObjectURL(content as File)}
          style={{ width: 170 }}
        />
      )}
    </Box>
  );
};

export default ChatMessageByType;
