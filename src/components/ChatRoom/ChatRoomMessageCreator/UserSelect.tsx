import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { USERS } from "../../../constants";
import { useState } from "react";

const UserSelect = () => {
  const [selectedUser, setSelectedUser] = useState("");

  const handleSelectUser = (event: SelectChangeEvent) => {
    setSelectedUser(event.target.value as string);
  };
  return (
    <FormControl variant="standard" sx={{ minWidth: 120 }}>
      <InputLabel id="select-chat-user-label">Select user</InputLabel>
      <Select
        labelId="select-chat-user-label"
        value={selectedUser}
        onChange={handleSelectUser}
        label="Select user"
        autoWidth
        size="small"
      >
        {USERS.map(({ username }) => (
          <MenuItem key={username} value={username}>
            {username}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default UserSelect;
