import React, { useEffect } from "react";
import Editor from "@monaco-editor/react";
import dracula from "monaco-themes/themes/Dracula.json";

function HomePage() {
  const [code, setCode] = React.useState(
    `function add(a, b) {\n  return a + b;\n}`
  );

  const render = () => {
    try {
      console.clear();
      const result = eval(code);
      if (result) {
        console.log(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    render();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div style={{ padding: 4, paddingRight: 34, paddingLeft: 34 }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button onClick={() => render()}>Run</button>
          <div style={{ flex: 1, marginLeft: 12 }}>
            <p>Write code and press run. See browser console for output</p>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      />
      <div style={{ flex: 1 }}>
        <Editor
          width="100%"
          defaultLanguage="javascript"
          theme="vs-dark"
          defaultValue="// let's write some broken code 😈"
          options={{
            fontSize: 16,
          }}
          onMount={(_, monaco) => {
            monaco.editor.defineTheme("dark-background", {
              base: "vs-dark",
              inherit: true,
              rules: dracula.rules,
              colors: {
                ...dracula.colors,
                "editor.background": "#000000",
                "editor.lineHighlightBackground": "#000000",
              },
            });
            monaco.editor.setTheme("dark-background");
          }}
          onChange={(value) => {
            if (value) {
              setCode(value);
            }
          }}
        />
      </div>
    </div>
  );
}

export default HomePage;
