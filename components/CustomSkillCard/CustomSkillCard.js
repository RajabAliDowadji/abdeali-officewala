"use client";
import Image from "next/image";

function CustomSkillCard({ title, imgSrc }) {
  return (
    <div className="flex flex-row justify-center items-center px-2 md:px-4 py-2 my-1 bg-white rounded-full w-max">
      <Image
        src={imgSrc}
        alt="Linkedin Logo"
        className="object-fill rounded-md"
        width={32}
        height={32}
      />
      <p className="text-black font-bold font-primary text-sm ml-1 md:ml-4 tracking-widest uppercase">
        {title}
      </p>
    </div>
  );
}

export default CustomSkillCard;
