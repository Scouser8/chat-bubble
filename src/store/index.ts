import { configureStore } from "@reduxjs/toolkit";
import user from "./userSlice";
import messages from "./messageSlice";

export default configureStore({
  reducer: { user, messages },
});
