import { Box, Typography } from "@mui/material";
import headerStyles from "../../styles/header.styles";
import ChatIcon from "@mui/icons-material/Chat";

function Header() {
  return (
    <Box sx={headerStyles}>
      <ChatIcon />
      <Typography variant="h5">Chat Bubble</Typography>
    </Box>
  );
}

export default Header;
