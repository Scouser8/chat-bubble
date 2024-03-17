import { Message, User } from "../components/types";

const MESSAGE_TYPE_TEXT = "text";
const MESSAGE_TYPE_IMAGE = "img";
const MESSAGE_TYPE_AUDIO = "audio";

export enum MessageTypes {
  TEXT = MESSAGE_TYPE_TEXT,
  IMAGE = MESSAGE_TYPE_IMAGE,
  AUDIO = MESSAGE_TYPE_AUDIO,
}

export const USERS: User[] = [
  { id: 1, username: "mabdelbaki" },
  { id: 2, username: "hythamsaif" },
  { id: 3, username: "habdulwanes" },
];

export const MESSAGES: Message[] = [
  {
    id: 1,
    type: MessageTypes.TEXT,
    content: "Good Morning All!",
    sender: USERS[0],
  },
  {
    id: 2,
    type: MessageTypes.TEXT,
    content: "How Are you doing?",
    sender: USERS[0],
  },
  {
    id: 3,
    type: MessageTypes.TEXT,
    content: "All is good Elhamdulellah",
    sender: USERS[1],
  },
  {
    id: 4,
    type: MessageTypes.TEXT,
    content: "Fine Elhamdulellah",
    sender: USERS[2],
  },
];

export const FILE_TYPE_IMAGES = "image/*";
