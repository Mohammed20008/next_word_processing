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
const Zooms = ["50%", "100%", "200%", "300%"];
export function DropdownMenuDemo() {
  const [Chevron, setChevron] = useState(false);
  const [Zoom, setZoom] = useState("100%");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex gap-2 h-full items-center">
        {Zoom}
        {Chevron ? (
          <ChevronUp onClick={() => setChevron(!Chevron)} />
        ) : (
          <ChevronDown onClick={() => setChevron(!Chevron)} />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {Zooms.map((zoom, idx) => (
            <DropdownMenuItem
              key={idx}
              onClick={() => {
                setZoom(zoom);
              }}
            >
              {zoom}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
