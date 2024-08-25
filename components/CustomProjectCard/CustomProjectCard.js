"use client";
import Link from "next/link";
import Image from "next/image";
import { STATIC_VALUES } from "@constants/string";
import listIcon from "@public/assets/PNG/list.png";

function CustomProjectCard({ projectDetails, index }) {
  const { PROJECT_INFO, SCREEN } = STATIC_VALUES.COMMON;

  return (
    <div className="grid grid-cols-1 gap-5 items-center md:grid-cols-2">
      <div
        className={`bg-projectColor rounded p-4 w-full md:p-16 ${
          index % 2 === 0 ? "order-last" : ""
        }`}
      >
        <Image
          src={projectDetails.project_images[0]}
          alt="Linkedin Logo"
          className="object-fill rounded-md w-full max-h-72"
        />
      </div>
      <div className="w-full box-border">
        <div class="w-full box-border">
          <p className="text-white font-primary font-medium text-2xl leading-relaxed tracking-widest">
            {projectDetails.name}
          </p>
          {projectDetails.details.slice(0, 2).map((detail) => (
            <div className="flex flex-row	justify-start items-center my-2 gap-3">
              <Image
                src={listIcon}
                alt="list about Logo"
                className="object-fill"
                width={14}
                height={14}
              />
              <p className="text-primary font-primary font-medium text-sm leading-relaxed tracking-wider">
                {detail}
              </p>
            </div>
          ))}
          <div className="flex flex-row justify-between items-center py-3 border-b border-secondary-border">
            <p className="text-primary font-sans text-sm tracking-widest">
              {PROJECT_INFO.PROJECT_INFO}
            </p>
          </div>
          <div className="flex flex-row justify-between items-center py-3 border-b border-secondary-border w-full">
            <p className="text-primary font-sans text-sm tracking-widest">
              {PROJECT_INFO.YEAR}
            </p>
            <p className="text-primary font-sans text-sm  tracking-widest">
              {projectDetails.year}
            </p>
          </div>
          <div className="flex flex-row justify-between items-center py-3 border-b border-secondary-border w-full">
            <p className="text-primary font-sans text-sm tracking-widest">
              {PROJECT_INFO.ROLE}
            </p>
            <p className="text-primary font-sans text-sm tracking-widest">
              {projectDetails.role}
            </p>
          </div>

          <div className="flex flex-row justify-start items-center mt-8 gap-5">
            <Link href={SCREEN.PROJECTS}>
              <p className="text-secondary font-primary text-xs tracking-widest uppercase underline underline-offset-8">
                {PROJECT_INFO.VIEW_PROJECT}
              </p>
            </Link>
            {projectDetails.github_link_url !== "" ? (
              <Link href={projectDetails.github_link_url}>
                <p className="text-secondary font-primary text-xs tracking-widest uppercase underline underline-offset-8">
                  {PROJECT_INFO.SEE_ON_GITHUB}
                </p>
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomProjectCard;
