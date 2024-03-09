import { Box, Typography } from "@mui/material";
import headerStyles from "../../styles/header.styles";
import ChatIcon from "@mui/icons-material/Chat";
import { useTranslation } from "react-i18next";

function Header() {
  const { t } = useTranslation();
  return (
    <Box sx={headerStyles}>
      <ChatIcon />
      <Typography variant="h5">{t("header_title")}</Typography>
    </Box>
  );
}

export default Header;
