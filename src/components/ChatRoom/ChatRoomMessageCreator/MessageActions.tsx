import { Box, IconButton } from "@mui/material";
import UploadButton from "../../UploadButton";
import { Send } from "@mui/icons-material";

const MessageActions = () => {
  return (
    <Box>
      <UploadButton />
      <IconButton aria-label="send-message" color="primary" role="button">
        <Send fontSize="inherit" />
      </IconButton>
    </Box>
  );
};

export default MessageActions;
