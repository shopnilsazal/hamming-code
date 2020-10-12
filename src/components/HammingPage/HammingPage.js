import React, { useState } from "react";

import CardTitle from "../utils/CardTitle";
import StatusBanner from "../utils/StatusBanner";
import HammingInput from "./HammingInput";
import HammingStatus from "./HammingStatus";
import HammingResults from "./HammingResults";
import findSyndrome from "../../hamming/findSyndrome";
import getParityArray from "../../hamming/getParityArray";
import toBinaryArray from "../../hamming/toBinaryArray";
import encodeHamming from "../../hamming/encodeHammming";

export default function HammingPage() {
  const [values, handleChange] = useState("");
  const [encodedVal, handleEncodedChange] = useState("");
  const [encoded, setEncoded] = useState("");
  const [binaryArr, updateBinaryArr] = useState([]);
  const [results, updateResults] = useState({});

  const handleSubmit = () => {
    let binArray = toBinaryArray(values);
    const hamming = encodeHamming(binArray.join(""));
    setEncoded(hamming);
  };

  const handleEncodedSubmit = () => {
    let encodeBinArray = encodedVal.split("");
    updateBinaryArr(encodeBinArray);
    updateResults({
      errorBit: findSyndrome(encodeBinArray),
      parityArray: getParityArray(encodeBinArray),
    });
  };

  return (
    <div>
      <CardTitle title="Hamming Code Computation" />
      <HammingInput
        value={values}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        encodedValue={encodedVal}
        handleEncodedChange={handleEncodedChange}
        handleEncodedSubmit={handleEncodedSubmit}
      />
      {encoded.length > 0 && (
        <StatusBanner type="info" title="Computed Hamming Code">
          {encoded}

          <br />
          <br />

          <h5>Length of Data Sequence: {toBinaryArray(values).length}</h5>
          <h5>
            Number of Parity Bits:{" "}
            {encoded.length - toBinaryArray(values).length}
          </h5>
          <h5>Length of CodeWord: {encoded.length}</h5>
        </StatusBanner>
      )}
      <HammingStatus encoded={encoded} results={results} />
      <HammingResults
        binaryArr={binaryArr}
        results={results}
        updateResults={updateResults}
      />
    </div>
  );
}
