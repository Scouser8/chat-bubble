import { styled } from "@mui/material/styles";
import { AttachFile } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { ChangeEvent, useRef } from "react";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

type Props = {
  handleFileSelection: (e: ChangeEvent<HTMLInputElement>) => void;
  fileTypesToAccept?: string;
};

const UploadButton = (props: Props) => {
  const { handleFileSelection, fileTypesToAccept = "*" } = props;
  const fileInputRef = useRef<HTMLInputElement>();

  return (
    <IconButton
      component="label"
      role={undefined}
      tabIndex={-1}
      onClick={() => fileInputRef?.current?.click()}
    >
      <AttachFile />
      <VisuallyHiddenInput
        type="file"
        onChange={handleFileSelection}
        accept={fileTypesToAccept}
      />
    </IconButton>
  );
};

export default UploadButton;
