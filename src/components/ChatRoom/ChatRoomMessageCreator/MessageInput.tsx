import { Box, TextField } from "@mui/material";
import { ChangeEvent, KeyboardEvent } from "react";

type Props = {
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void;
};

const MessageInput = (props: Props) => {
  const { value, handleKeyDown = () => {}, handleChange } = props;
  return (
    <Box sx={{ flex: 1 }}>
      <TextField
        value={value}
        multiline
        rows={2}
        fullWidth
        InputProps={{ sx: { py: 1 } }}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </Box>
  );
};

export default MessageInput;
