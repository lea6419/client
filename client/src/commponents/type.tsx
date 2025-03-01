import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // ייבוא עיצוב ברירת מחדל

const TextEditor = () => {
  const [content, setContent] = useState("");

  const handleChange = (value: string) => {
    setContent(value);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-2">📝 עורך טקסט</h2>
      <ReactQuill theme="snow" value={content} onChange={handleChange} />
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => alert("תוכן נשמר זמנית!" )}
      >
        שמירה
      </button>
    </div>
  );
};

export default TextEditor;
