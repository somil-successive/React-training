import React from "react";
import UseClipboard from "./UseClipboard";
import { useState } from "react";

const Component = () => {
  const [text, setText] = useState("");
  const { isCopied, copyToClipboard } = UseClipboard();

  return (
    <div>
      <p>{text}</p>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <button onClick={() => copyToClipboard(text)}>Copy to Clipboard</button>
      {isCopied && <div>Copied to clipboard! </div>}
    </div>
  );
};

export default Component;
