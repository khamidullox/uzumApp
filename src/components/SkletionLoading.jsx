import React from "react";

function SkletionLoading() {
  return (
    <div className="flex w-[860px] max-w-full flex-col gap-4">
      <div className="skeleton w-full h-96 max-h-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
}

export default SkletionLoading;
