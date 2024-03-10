import { configureStore } from "@reduxjs/toolkit";
import messages from "./messageSlice";

export default configureStore({
  reducer: { messages },
});
