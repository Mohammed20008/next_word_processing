"use client";
import { useState } from "react";
import { Textarea } from "./ui/textarea";

const TextArea = () => {
  const [textValue, setTextValue] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value);
  };

  const handleSelect = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextValue(event.target.value);
  };

  return (
    <div className="px-6 w-screen mt-4">
      <form>
        <Textarea
          name="textarea"
          className="h-screen focus:border-none"
          value={textValue}
          onChange={handleTextChange}
          onSelect={handleSelect}
        />
      </form>
    </div>
  );
};

export default TextArea;
