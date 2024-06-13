import React from "react";

function LeftSide() {
  return (
    <div className="flex fixed bottom-0 px-10 left-0 sm:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="https://www.github.com/anobes6416">
            {" "}
             <i class="ri-github-line text-gray-400"></i>
          </a>
          <a href="https://www.linkedin.com/in/sebonaifa">
            <i class="ri-linkedin-line text-gray-400"></i>
          </a>
          <a href="https://www.instagram.com/kankottube/">
            <i class="ri-instagram-line text-gray-400"></i>
          </a>
          <i class="ri-tiktok-line text-gray-400"></i>
          <i class="ri-telegram-line text-gray-400"></i>
        </div>
        <div className="w-[1px] h-52 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSide;
