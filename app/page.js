import Link from "next/link";
import Image from "next/image";
import { STATIC_VALUES } from "@constants/string";
import myPicture from "@public/assets/PNG/myPicture.png";
import githubHomeIcon from "@public/assets/PNG/github.png";
import linkedinHomeIcon from "@public/assets/PNG/linkedin.png";
import CustomButton from "@components/CustomButton/CustomButton";
import CustomProjectCard from "@components/CustomProjectCard/CustomProjectCard";

function Home() {
  const { HOME, COMMON, ABOUT, PROJECT } = STATIC_VALUES;
  const { LINKEDIN, GITHUB } = COMMON.SOCIAL_LINKS;

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-2 pb-12 border-b-2 border-primary-border">
        <div className="flex flex-col	justify-center items-start">
          <p className="text-primary font-primary font-bold text-2xl lg:text-4xl uppercase tracking-wider">
            {HOME.TITLE_TEXT}
          </p>
          <p className="text-primary font-primary font-bold text-2xl lg:text-4xl uppercase tracking-widest">
            {HOME.MY_NAME}
          </p>
          <p className="text-primary font-sans text-sm tracking-wider">
            {HOME.DESC_TEXT}
          </p>
          <div className="flex flex-row	justify-start items-center my-8 gap-4">
            <CustomButton title={HOME.CONTACT_ME} className="uppercase w-52" />
            <Link href={LINKEDIN} passHref={true}>
              <Image
                src={linkedinHomeIcon}
                alt="Linkedin Home Logo"
                className="object-fill cursor-pointer"
                width={54}
                height={54}
              />
            </Link>
            <Link href={GITHUB} passHref={true}>
              <Image
                src={githubHomeIcon}
                alt="github Home Logo"
                className="object-fill cursor-pointer"
                width={54}
                height={54}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col	justify-end items-end w-full">
          <Image
            src={myPicture}
            alt="Linkedin Logo"
            className="w-full md:w-3/4 object-fill rounded-md"
            width={400}
            height={60}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 py-14 border-b-2 border-primary-border">
        <p className="text-primary font-primary font-bold text-2xl lg:text-4xl mt-4 my-1 uppercase  tracking-wider">
          {HOME.FEATURED_PROJECTS}
        </p>
        <p className="text-primary font-sans text-sm w-full md:w-2/4 tracking-widest">
          {HOME.PROJECTS_DESC}
        </p>
        {PROJECT.PROJECT_DETAILS.reverse()
          .slice(0, 3)
          .map((projectDetails, index) => (
            <div
              className={`${
                index ===
                PROJECT.PROJECT_DETAILS.reverse().slice(0, 3).length - 1
                  ? "border-b-0 pt-14"
                  : "py-14 border-b-2 border-secondary-border"
              }`}
            >
              <CustomProjectCard projectDetails={projectDetails} />
            </div>
          ))}
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-2 py-14 border-b-2 border-primary-border">
        <p className="text-primary font-primary font-medium text-3xl md:text-5xl uppercase tracking-widest">
          {ABOUT.ABOUT_ME}
        </p>
        <div>
          <p className="text-primary font-primary font-medium text-2xl tracking-wider">
            {ABOUT.ABOUT_TITLE}
          </p>
          <p className="text-primary font-primary font-medium text-2xl tracking-wider">
            {ABOUT.ABOUT_TITLE_2}
          </p>
          <p className="text-primary font-primary text-sm my-2 tracking-widest">
            {ABOUT.ABOUT_DESC}
          </p>
          <Link href={COMMON.SCREEN.ABOUT}>
            <p className="text-secondary font-primary text-xs mt-14 tracking-wider uppercase underline underline-offset-8">
              {ABOUT.MORE_ABOUT_ME}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Home;
