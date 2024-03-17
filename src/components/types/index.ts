import { MessageTypes } from "../../constants";
import store from "../../store";

export type MessageType = MessageTypes;

export type User = { id: number | string; username: string };

export type Message = {
  id?: number | string;
  content: string | File;
  type: MessageType;
  sender: User;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
