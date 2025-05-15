"use client";

import Image from "next/image";

const LogoSection = () => {
  return (
    <div className="flex items-center gap-4">
      <Image
        src="/logo.svg"
        alt="Code Co Logo"
        width={56}
        height={56}
        className="rounded-full bg-white"
        priority
      />
      <span className="text-2xl font-bold text-gray-800">
        Code <span className="text-gray-400">Co</span>
      </span>
    </div>
  );
};

export default LogoSection;
