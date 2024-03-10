import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import { MESSAGES } from "../constants";
import { Message } from "../components/types";

export const sendNewMessage = createAsyncThunk(
  "messages/add",
  async (newMessage, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      setTimeout(() => newMessage, 500);
    } catch (err: any) {
      return rejectWithValue("Error Msg");
    }
  }
);

type MessageState = { messages: Message[]; error: string };

const initialState: MessageState = {
  messages: MESSAGES,
  error: "",
};

const messageSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<MessageState>) => {
    builder
      .addCase(sendNewMessage.fulfilled, (state, action) => {
        state.messages.push(action.payload as any);
        state.error = "";
      })
      .addCase(sendNewMessage.rejected, (state, action) => {
        state.error = action.error as any;
      });
  },
});

export default messageSlice.reducer;
