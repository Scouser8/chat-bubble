import { Box, TextField } from "@mui/material";

const MessageInput = () => {
  return (
    <Box sx={{ flex: 1 }}>
      <TextField multiline rows={1} fullWidth />
    </Box>
  );
};

export default MessageInput;
