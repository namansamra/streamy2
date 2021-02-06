import React, { useEffect } from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import { deleteFlashMessage } from "../../actions/flashmessage";

function FlashMessage(props) {
  const { id, type, text } = props.message;
  useEffect(() => {
    const token = setInterval(() => {
      props.deleteFlashMessage(id);
    }, 3000);

    return () => clearInterval(token);
  });

  return (
    <div>
      <div
        className={classnames("alert", "text-center", {
          "alert-success": type === "success",
          "alert-danger": type === "error",
        })}
      >
        {text}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
    return {
      message: state.flashmessage,
    };
  };

export default connect(mapStateToProps, {
  deleteFlashMessage: deleteFlashMessage,
})(FlashMessage);
