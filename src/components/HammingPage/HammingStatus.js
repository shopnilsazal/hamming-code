import React from "react";

import StatusBanner from "../utils/StatusBanner";

export default function HammingStatus(props) {
  let str = props.encoded;
  // truncate for display
  let n = 15;
  let displayStr = str.length > n ? str.substr(0, n - 1) + "..." : str;

  if (str) {
    if (isNaN(str)) {
      return (
        <div>
          <StatusBanner type="warning" title="Input error">
            "{displayStr}" is not a valid number.
          </StatusBanner>
        </div>
      );
    } else {
      // 2 bit error detection
      let errArr = props.results.errorBit;
      if (errArr >= 0) {
        return (
          <div>
            <StatusBanner type="danger" title="Error detected">
              {`Bit ${errArr + 1} is incorrect.`}
            </StatusBanner>
          </div>
        );
      } else {
        return <div></div>;
      }
    }
  }
  return null;
}
