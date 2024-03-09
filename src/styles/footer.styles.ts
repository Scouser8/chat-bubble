import { Theme as muiTheme } from "@mui/material/styles";

const footerStyles = (theme: muiTheme) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  left: 0,
  bottom: 0,
  width: "100%",
  height: "30px",
  py: 0.5,
  mt: "auto",
  backgroundColor: theme?.palette?.grey[200],
});

export default footerStyles;
