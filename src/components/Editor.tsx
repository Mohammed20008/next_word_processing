import React from "react";
import ReactQuill from "react-quill";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import "react-quill/dist/quill.snow.css";
import { motion } from "framer-motion";

export const Editor = () => {
  const [state, setState] = React.useState({ value: null });
  const handleChange = (value: any) => {
    setState({ value });
  };

  return (
    <div className="text-editor rounded-full flex items-center flex-col w-screen px-4 h-screen">
      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
      >
        <EditorToolbar />
      </motion.div>

      <motion.div
        className="w-full h-screen"
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
      >
        <ReactQuill
          theme="snow"
          value={state.value}
          onChange={handleChange}
          placeholder={"type you text here"}
          modules={modules}
          formats={formats}
        />
      </motion.div>
    </div>
  );
};

export default Editor;
