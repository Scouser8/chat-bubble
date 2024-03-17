import { Box, IconButton } from "@mui/material";
import chatRoomMessageCreatorStyles from "../../../styles/chatRoomMessageCreator.styles";
import { Send } from "@mui/icons-material";
import UploadButton from "../../UploadButton";
import { ChangeEvent, FormEvent, ReactNode } from "react";
import MessageTypesToolbar from "./MessageTypesToolbar";

type withFileUpload = {
  handleFileSelection: (e: ChangeEvent<HTMLInputElement>) => void;
  showAttachmentButton: boolean;
};

type withoutFileUpload = {
  handleFileSelection?: (e: ChangeEvent<HTMLInputElement>) => void;
  showAttachmentButton?: boolean;
};

type Props = {
  textInputComponent?: ReactNode;
  isSubmitDisabledForText: boolean;
  fileTypesToAccept?: string;
  handleSubmit: () => void;
  submitButton?: ReactNode;
} & (withFileUpload | withoutFileUpload);

const ChatRoomMessageCreator = (props: Props) => {
  const {
    textInputComponent = null,
    isSubmitDisabledForText,
    showAttachmentButton,
    fileTypesToAccept,
    handleFileSelection,
    handleSubmit,
    submitButton,
  } = props;

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form action="" onSubmit={handleFormSubmit}>
      <Box sx={chatRoomMessageCreatorStyles}>
        {textInputComponent || <input type="text" style={{ flex: 1 }} />}
        {showAttachmentButton && handleFileSelection && (
          <UploadButton
            handleFileSelection={handleFileSelection}
            fileTypesToAccept={fileTypesToAccept}
          />
        )}
        <MessageTypesToolbar />
        {submitButton || (
          <IconButton
            aria-label="send-message"
            color="primary"
            role="button"
            type="submit"
            onClick={handleSubmit}
            disabled={isSubmitDisabledForText}
          >
            <Send fontSize="inherit" />
          </IconButton>
        )}
      </Box>
    </form>
  );
};

export default ChatRoomMessageCreator;
