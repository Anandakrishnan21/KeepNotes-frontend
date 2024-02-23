import React from "react";
import { AddNotes } from "../form/AddNotes";
import { ModeToggle } from "../mode-Toggle";

function Sidebar() {
    const commonClasses =
    "flex flex-col overflow-y-auto scrollbar-hidden bg-neutral-50 dark:bg-neutral-950 border-r-neutral-200 border-[1px] dark:border-r-neutral-800 p-2";
  return (
    <aside
      className={`${commonClasses} sticky top-0 justify-between items-center z-10`}
    >
      <AddNotes />
      <ModeToggle />
    </aside>
  );
}

export default Sidebar;