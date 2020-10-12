import React from "react";

export default function HammingResults(props) {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col text-center">
          <p>
            {displayBinaryJSX(props.binaryArr, props.results.errorBit)} <br />
            <em className="small">
              Check/parity bits are dark. Data bits are light.{" "}
            </em>
          </p>
        </div>
      </div>
    </div>
  );
}

function displayBinaryJSX(binaryArr, errorBit, numOfErrors) {
  let content = [];

  for (let i = 0; i < binaryArr.length; i++) {
    if (i === errorBit) {
      content.push(
        <span key={i} className="error bit">
          {binaryArr[i]}
        </span>
      );
    } else if (Math.log2(i + 1) % 1 === 0) {
      content.push(
        <span className="check bit" key={i}>
          {binaryArr[i]}
        </span>
      );
    } else {
      content.push(
        <span className="normal bit" key={i}>
          {binaryArr[i]}
        </span>
      );
    }
  }

  return content;
}
