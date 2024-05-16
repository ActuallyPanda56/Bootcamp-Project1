import React, { useState } from "react";

export default function Component() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  return (
    <>
      <div>
        <input
          type="text"
          value={inputText}
          onChange={(event) => {
            setInputText(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setOutputText(inputText);
          }}
        >
          Actualizar
        </button>
        <p>Texto input: {inputText}</p>
        <p>Texto actualizado: {outputText}</p>
      </div>
    </>
  );
}
