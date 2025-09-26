import { useState } from "react";

export default function TextTransformer() {
  const [text, setText] = useState('');

   const [output, setOutput] = useState('');
   
  function handleUpperCase() {
     const result = text.toUpperCase();
    console.log(result);
    setOutput(result);
  }

  function handleLowerCase() {
    const result = text.toLowerCase();
    console.log(result);
    setOutput(result);
  }

  return (
    <>
      <p>Text Transformer</p>
      <input
        type="text"
        placeholder="Enter text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={handleUpperCase}>UPPER CASE</button>
      <button onClick={handleLowerCase}>lower case</button>
      <p>Output: {output}</p>
    </>
  );
}
