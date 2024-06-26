"use client";
import Editor from "@/components/Editor";
import { HeroHighlightDemo } from "@/components/HeroHighlight";
import { MenubarDemo } from "@/components/Menu";
import { Highlight } from "@/components/ui/hero-highlight";

import CheckAuth from "@/hooks/CheckAuth";

export default function Home() {
  return (
    <div className="flex h-screen flex-col px-4 items-center w-screen bg-gradient-to-r from-slate-50 to-lime-50">
      <div className="rounded-full flex flex-col items-center">
        <div className=" w-screen mt-2">
          <MenubarDemo />
        </div>

        <Editor />
      </div>
    </div>
  );
}
