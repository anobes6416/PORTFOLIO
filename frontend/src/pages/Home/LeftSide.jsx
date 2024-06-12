import React from "react";

function LeftSide() {
  return (
    <div className="flex fixed bottom-0">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3">
          <i class="ri-github-line text-gray-400"></i>
          <i class="ri-instagram-line text-gray-400"></i>
          <i class="ri-linkedin-line text-gray-400"></i>
          <i class="ri-tiktok-line text-gray-400"></i>
          <i class="ri-telegram-line text-gray-400"></i>
        </div>
        <div className="w-[1px] h-52 bg-[#125f63]">

        </div>
      </div>
    </div>
  );
}

export default LeftSide;
