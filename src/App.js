import "./App.css";
import React, { useState, useEffect } from "react";
import useLocalStorage from "./useLocalStorage";
import cheatSheetData from "./sheet"; // Import the JavaScript object

const App = () => {
  const [code, setCode] = useLocalStorage("markdown-content", "## Hello");
  const [compiled, setCompiled] = useState('<h2 id="hello">Hello</h2>'); // Use state for compiled content
  const [hideEditor, setHideEditor] = useLocalStorage("editor-hide", false);
  const [hidePreview, setHidePreview] = useLocalStorage("preview-hide", false);
  const [hideDocs, setHideDocs] = useLocalStorage("docs-hide", false);

  const handleChange = (e) => {
    const value = e.target.value;
    setCode(value);
    setCompiled(value);
  };

  const handleDocsClick = () => {
    setHideDocs(false);
    setHideEditor(true);
    setHidePreview(true);
  };

  useEffect(() => {
    // Initialize compiled content
    setCompiled(code);
  }, [code]); // Update compiled content when code changes

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button
            onClick={() => {
              setHideEditor(false);
              setHidePreview(true);
              setHideDocs(true);
            }}
            className="btn"
          >
            MarkDown
          </button>
          <button
            onClick={() => {
              setHidePreview(false);
              setHideEditor(true);
              setHideDocs(true);
            }}
          >
            Preview
          </button>
          <button onClick={handleDocsClick}>Docs</button>
        </div>
        {!hideEditor && (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        )}
        {!hidePreview && (
          <div>
            <div dangerouslySetInnerHTML={{ __html: compiled }} />
          </div>
        )}
        {!hideDocs && (
          <div>
            <h2>Markdown Cheat Sheet</h2>
            {cheatSheetData.cheat_sheet.map((section, index) => (
              <div key={index}>
                <h3>{Object.keys(section)[0]}</h3>
                <ul>
                  {section[Object.keys(section)[0]].map((item, idx) => (
                    <li key={idx}>
                      <strong>{item.element}:</strong> {item.syntax}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
