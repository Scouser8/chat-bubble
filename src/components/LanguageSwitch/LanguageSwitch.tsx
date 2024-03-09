import { Box, Button } from "@mui/material";
import { supportedLngs } from "../../i18n/config";
import { useTranslation } from "react-i18next";

const LanguageSwitch = () => {
  const { i18n } = useTranslation();
  return (
    <Box>
      {Object.entries(supportedLngs).map(
        ([code, name]) =>
          code !== i18n.resolvedLanguage && (
            <Button
              key={code}
              onClick={() => i18n.changeLanguage(code)}
              color="secondary"
            >
              {name}
            </Button>
          )
      )}
    </Box>
  );
};

export default LanguageSwitch;
