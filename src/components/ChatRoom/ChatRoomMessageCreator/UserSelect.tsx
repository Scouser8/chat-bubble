import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { USERS } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../types";
import userActions from "../../../store/actions/userActions";

const UserSelect = () => {
  const selectedUser = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleSelectUser = (e: SelectChangeEvent) => {
    const selectedUsername = e.target.value;
    const userToSet = USERS.find((user) => user.username === selectedUsername)!;
    dispatch(userActions.setUser(userToSet));
  };
  return (
    <FormControl variant="standard" sx={{ minWidth: 120 }}>
      <InputLabel id="select-chat-user-label">Select user</InputLabel>
      <Select
        labelId="select-chat-user-label"
        value={selectedUser.username}
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
