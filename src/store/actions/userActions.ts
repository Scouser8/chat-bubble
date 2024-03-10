import { User } from "../../components/types";

const SET_USER = "user/setUser";

const setUser = (user: User) => ({
  type: SET_USER,
  payload: user,
});

export default { setUser };
