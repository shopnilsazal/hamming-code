import React from "react";

export default function CardTitle(props) {
  return (
    <div className="card-title-section">
      <h1 className="display-5 bold text-dark">{props.title}</h1>
      <h4 className="inline text-dark card-subtitle">
        {" "}
        <em>{props.subtitle}</em>
      </h4>{" "}
      <br /> <br />
    </div>
  );
}
