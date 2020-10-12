import React from "react";

export default function HammingInput(props) {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleSubmit();
        }}
        autoComplete="off"
      >
        <div className="form-row">
          <div className="col-fit">
            <label htmlFor="encoded">Enter Value: </label>
          </div>
          <div className="col-12 col-md">
            <input
              className="inline form-control"
              type="text"
              name="encoded"
              id="encoded"
              placeholder="AAAA"
              value={props.value}
              onChange={(e) => {
                props.handleChange(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Compute Hamming Code
        </button>
      </form>

      <br />
      <br />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.handleEncodedSubmit();
        }}
        autoComplete="off"
      >
        <div className="form-row">
          <div className="col-fit">
            <label htmlFor="encoded">Enter Encoded Value: </label>
          </div>
          <div className="col-12 col-md">
            <input
              className="inline form-control"
              type="text"
              placeholder="010001001"
              value={props.encodedValue}
              onChange={(e) => {
                props.handleEncodedChange(e.target.value);
              }}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Compute Error Syndrome
        </button>
      </form>
    </div>
  );
}
