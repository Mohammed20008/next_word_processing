"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
const Sizes = [
  {
    label: "Normal text",
    size: "text-sm",
  },
  {
    label: "Heading1",
    size: "text-3xl",
  },
  {
    label: "Heading2",
    size: "text-2xl",
  },
  {
    label: "Heading3",
    size: "text-xl",
  },
];
export function TextSizes() {
  const [Chevron, setChevron] = useState(false);
  const [Size, setSize] = useState("Normal text");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 h-full items-center">
        {Size}
        {Chevron ? (
          <ChevronUp onClick={() => setChevron(!Chevron)} />
        ) : (
          <ChevronDown onClick={() => setChevron(!Chevron)} />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {Sizes.map((size, idx) => (
            <DropdownMenuItem
              className={size.size}
              key={idx}
              onClick={() => {
                setSize(size.label);
              }}
            >
              {size.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
