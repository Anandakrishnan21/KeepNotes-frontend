import React from "react";

function Ping() {
  return (
    <span class="relative flex h-3 w-3 top-0 right-1.5">
      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
    </span>
  );
}

export default Ping;
