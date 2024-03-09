import { Avatar, Box } from "@mui/material";
import chatBubbleStyles from "../../styles/chatBubble.styles";

type Props = {
  toggleIsChatOpen: () => void;
};

const ChatBubble = (props: Props) => {
  const { toggleIsChatOpen } = props;

  return (
    <Box sx={chatBubbleStyles}>
      <Avatar
        src="Naseej-Logo.png"
        sx={{ cursor: "pointer" }}
        onClick={toggleIsChatOpen}
      />
    </Box>
  );
};

export default ChatBubble;
