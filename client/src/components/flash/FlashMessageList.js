import React from "react";
import { connect } from "react-redux";
import FlashMessage from "./FlashMessage";
function FlashMessageList({ messages }) {
  const Allmessage = messages.map((msg) => (
    <FlashMessage
      key={msg.id}
      message={msg}
    />
  ));
  return <div>{Allmessage}</div>;
}

const mapStateToProps = (state) => {
  return {
    messages: state.flashmessages,
  };
};
export default connect(mapStateToProps)(FlashMessageList);
