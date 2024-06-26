"use client";
import ReactQuill, { Quill } from "react-quill";
import "quill/dist/quill.core.css";
import "react-quill/dist/quill.snow.css";
import React, { useRef, useEffect } from "react";

const toolbarOptions = [
  ["bold", "italic", "underline", "strike"], // toggled buttons
  ["blockquote", "code-block"],
  ["link", "image", "video", "formula"],

  [{ header: 1 }, { header: 2 }], // custom button values
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }], // superscript/subscript
  [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
  [{ direction: "rtl" }], // text direction

  [{ size: ["small", false, "large", "huge"] }], // custom dropdown
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }], // dropdown with defaults from theme
  [{ font: [] }],
  [{ align: [] }],

  ["clean"], // remove formatting button
];
const ToolBar = () => {
  const quillRef = useRef(null);
  useEffect(() => {
    if (quillRef.current) {
    }
  }, []);
  return (
    <div className="rounded-full">
      <ReactQuill
        ref={quillRef}
        theme="snow"
        modules={{ toolbar: toolbarOptions }}
        className="border-none mt-10 rounded-full h-screen"
      />
    </div>
  );
};
export default ToolBar;
