import React, { FC, useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
const font = Quill.import("attributors/class/font");

const Size = Quill.import("formats/size");
console.log(Size);
console.log("object");
const formats = [
  "header",
  "font",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "background",
  "code",
  "script",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];
const modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    ["clean"],
  ],
};
interface EditorProps {
  children: any;
}
const EditBar: FC<EditorProps> = ({ children }) => {
  const [value, setValue] = useState("");
  return (
    <div className="px-4 w-screen relative flex flex-col justify-center items-center">
      {children}
      {/* <ReactQuill
        formats={formats}
        modules={modules}
        theme="snow"
        value={value}
        onChange={setValue}
        className={className}
      /> */}
    </div>
  );
};
export default EditBar;
