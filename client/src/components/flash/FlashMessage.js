import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { deleteFlashMessage } from "../../actions/flashmessage";

function FlashMessage(props) {
  const { id, type, text } = props.message;
  function onClick() {
    console.log("hello flash msg closed");
    props.deleteFlashMessage(id);
  }

  return (
    <div>
      <div
        className={classnames("alert", {
          "alert-success": type === "success",
          "alert-danger": type === "error",
        })}
      >
        {text}
        <button onClick={onClick} className="close">
          <span>&times;</span>
        </button>
      </div>
    </div>
  );
}

export default connect(null, {
  deleteFlashMessage: deleteFlashMessage,
})(FlashMessage);
