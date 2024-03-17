const chatMessagesContainerStyles = {
  flex: 1,
  height: "60vh",
  overflowY: "scroll",
  padding: 5,
};

const chatMessageStyles = (isMessageFromCurrentUser: boolean) => ({
  color: "black",
  marginTop: 2,
  display: "flex",
  justifyContent: isMessageFromCurrentUser ? "flex-end" : "flex-start",
  gap: 2,
  "& .messageContent": {
    borderRadius: 1,
    padding: 1,
    background: isMessageFromCurrentUser ? "teal" : "lightGrey",
  },
});

export { chatMessagesContainerStyles, chatMessageStyles };
