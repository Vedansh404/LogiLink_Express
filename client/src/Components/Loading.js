import React from "react";

function Loading() {
  return (
    <div>
      <div
        className="spinner-border"
        role="status"
        style={{ height: "100px", width: "100px", marginTop: "100px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
