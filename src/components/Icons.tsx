"use client";

import Separator from "./Separator";
import { leftIcons } from "../lib/icons";
import { Button } from "./ui/button";
import { DropdownMenuDemo } from "./ZoomChevron";
import { TextSizes } from "./TextSizes";

const Icons = () => {
  return (
    <div className="h-full flex items-center gap-4">
      {/* left icons */}
      <div className="flex h-full items-center text-gray-600">
        {leftIcons.map(({ name, Icon }: { name: string; Icon: any }) => (
          <Button
            key={name}
            variant={"ghost"}
            className=" hover:text-indigo-600"
          >
            <Icon />
          </Button>
        ))}
        <Button variant={"ghost"} className="hover:text-indigo-600">
          <DropdownMenuDemo />
        </Button>
      </div>
      <Separator />
      <TextSizes />
    </div>
  );
};
export default Icons;
