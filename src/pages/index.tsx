import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";

const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

function HomePage() {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  const render = () => {
    try {
      console.clear();
      eval(code);
    } catch (error) {
      // console.log(error);
    }
  };

  useEffect(() => {
    render();
  }, [code]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <CodeEditor
        value={code}
        language="js"
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          width: "100%",
          minHeight: "100vh",
          fontSize: "1em",
          fontFamily:
            "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
        }}
      />
    </div>
  );
}

export default HomePage;
