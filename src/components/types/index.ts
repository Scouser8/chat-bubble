import store from "../../store";

export type Text = "text";
export type Image = "img";
export type Audio = "audio";

export type MessageType = Text | Image | Audio;

export type User = { id: number | string; username: string };

export type Message = {
  id: number | string;
  content: string;
  type: MessageType;
  sender: User;
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;