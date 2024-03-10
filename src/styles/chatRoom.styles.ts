import { Theme as muiTheme } from "@mui/material/styles";

const chatRoomStyles = (theme: muiTheme) => ({
  width: "87%",
  ".chatRoom": {
    display: "flex",
    flexDirection: "column",
    border: "1px solid #D3D3D3",
    borderRadius: 1,
    height: "100%",
    ".header": {
      px: 2,
      py: 1,
      background: theme.palette.grey[200],
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
});

export default chatRoomStyles;
