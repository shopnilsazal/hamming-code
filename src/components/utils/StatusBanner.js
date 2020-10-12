import React from "react";

export default function StatusBanner(props) {
  return (
    <div>
      <div
        className={"mt-3 alert alert-" + (props.type ? props.type : "warning")}
      >
        <h4 className="alert-heading">{props.title}</h4>
        <div className="mb-0">{props.children}</div>
      </div>
    </div>
  );
}
