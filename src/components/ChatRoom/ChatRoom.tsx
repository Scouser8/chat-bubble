import { Box } from "@mui/material";
import ChatRoomHeader from "./ChatRoomHeader";
import ChatMessages from "./ChatMessages";
import ChatRoomMessageCreator from "./ChatRoomMessageCreator";
import MessageInput from "./ChatRoomMessageCreator/MessageInput";
import {
  ChangeEvent,
  KeyboardEvent,
  ReactNode,
  useMemo,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendNewMessage } from "../../store/messageSlice";
import { AppDispatch, RootState } from "../types";
import { FILE_TYPE_IMAGES, MessageTypes } from "../../constants";

type ToolbarMessageType = { type: string; IconButtonComponent: ReactNode };

const CHAT_TOOLBAR_MESSAGE_TYPES = [];

const ChatRoom = () => {
  const selectedUser = useSelector((state: RootState) => state.user);
  const messageInitialState = useMemo(
    () => ({
      content: "",
      type: MessageTypes.TEXT,
      sender: selectedUser,
    }),
    [selectedUser]
  );
  const [message, setMessage] = useState(messageInitialState);
  const { content: messageContent } = message;
  const isSubmitDisabledForText = !messageContent.trim();
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = () => {
    dispatch(sendNewMessage(message))
      .unwrap()
      .then(() => {
        setMessage(messageInitialState);
      });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage((prevMessageState) => ({
      ...prevMessageState,
      content: e.target.value,
    }));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]!;
    console.log("file", file);
    const newMessage = {
      ...messageInitialState,
      type: MessageTypes.IMAGE,
      content: file,
    };
    dispatch(sendNewMessage(newMessage));
  };
  return (
    <Box className="chatRoom">
      <ChatRoomHeader />
      <ChatMessages />
      <ChatRoomMessageCreator
        textInputComponent={
          <MessageInput
            value={messageContent}
            handleKeyDown={handleKeyDown}
            handleChange={handleInputChange}
          />
        }
        showAttachmentButton
        handleFileSelection={handleFileUpload}
        fileTypesToAccept={FILE_TYPE_IMAGES}
        handleSubmit={handleSubmit}
        isSubmitDisabledForText={isSubmitDisabledForText}
      />
    </Box>
  );
};

export default ChatRoom;
