import { Box, Typography } from "@mui/material";
import headerStyles from "../../styles/header.styles";
import ChatIcon from "@mui/icons-material/Chat";
import { useTranslation } from "react-i18next";
import LanguageSwitch from "../LanguageSwitch";

function Header() {
  const { t } = useTranslation();
  return (
    <Box sx={headerStyles}>
      <Box className="title">
        <ChatIcon />
        <Typography variant="h5">{t("header_title")}</Typography>
      </Box>
      <LanguageSwitch />
    </Box>
  );
}

export default Header;
