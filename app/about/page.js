import Link from "next/link";
import Image from "next/image";
import { STATIC_VALUES } from "@constants/string";
import listIcon from "@public/assets/PNG/list.png";
import myPicture from "@public/assets/PNG/myPicture.png";
import githubHomeIcon from "@public/assets/PNG/github.png";
import linkedinHomeIcon from "@public/assets/PNG/linkedin.png";
import CustomButton from "@components/CustomButton/CustomButton";
import CustomSkillCard from "@components/CustomSkillCard/CustomSkillCard";

function About() {
  const { COMMON, ABOUT } = STATIC_VALUES;
  const { LINKEDIN, GITHUB } = COMMON.SOCIAL_LINKS;

  return (
    <div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-2 py-14 border-b-2 border-primary-border">
        <p className="text-primary font-primary font-medium text-3xl md:text-5xl uppercase tracking-wider">
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
          <div className="flex flex-row	justify-start items-center my-8 gap-4">
            <CustomButton
              title={ABOUT.DOWNLOAD_RESUME}
              className="uppercase w-64"
            />
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
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-2 py-14 border-b-2 border-primary-border">
        <Image
          src={myPicture}
          alt="Linkedin Logo"
          className="w-full md:w-3/4 object-fill rounded-md"
          width={400}
          height={60}
        />
        <div>
          <p className="text-primary font-primary font-medium text-3xl mb-4 md:text-4xl uppercase tracking-widest">
            {ABOUT.MY_CAPABILITIES}
          </p>
          <p className="text-primary font-primary text-sm mb-4 tracking-widest">
            {ABOUT.MY_CAPABILITIES_DESC}
          </p>
          <div className="flex flex-row flex-wrap gap-2">
            {ABOUT.SKILL_DETAILS.map((skill) => (
              <CustomSkillCard title={skill.TITLE} imgSrc={skill.ICON} />
            ))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-2 py-14 border-b-2 border-primary-border">
        <p className="text-primary font-primary font-medium text-3xl md:text-4xl uppercase tracking-widest">
          {ABOUT.MY_EXPERIENCE}
        </p>
        <div>
          <div className="mb-6 md:mb-10">
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
              <div className="grid grid-cols-1">
                <div className=" flex flex-col justify-start items-start gap-2">
                  <p className="text-primary font-primary font-medium text-md tracking-widest">
                    {ABOUT.COMPANY1_TITLE}
                  </p>
                  <p className="text-secondary font-primary font-medium text-sm tracking-widest">
                    {ABOUT.COMPANY1_TITLE2}
                  </p>
                </div>
              </div>
              <p className="text-primary font-primary font-medium text-sm md:text-end tracking-widest">
                {ABOUT.COMPANY1_TIMESTAMP}
              </p>
            </div>
            <div>
              {ABOUT.COMPANY1_DESC.map((desc) => (
                <div className="flex flex-row	justify-start items-center my-2 gap-3">
                  <Image
                    src={listIcon}
                    alt="list about Logo"
                    className="object-fill"
                    width={14}
                    height={14}
                  />
                  <p className="text-primary font-sans text-sm tracking-widest">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-0 md:mb-10">
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2">
              <div className="grid grid-cols-1">
                <div className=" flex flex-col justify-start items-start gap-2">
                  <p className="text-primary font-primary font-medium text-md tracking-widest">
                    {ABOUT.COMPANY2_TITLE}
                  </p>
                  <p className="text-secondary font-primary font-medium text-sm tracking-widest">
                    {ABOUT.COMPANY2_TITLE2}
                  </p>
                </div>
              </div>
              <p className="text-primary font-primary font-medium text-sm md:text-end tracking-widest">
                {ABOUT.COMPANY2_TIMESTAMP}
              </p>
            </div>
            <div>
              {ABOUT.COMPANY2_DESC.map((desc) => (
                <div className="flex flex-row	justify-start items-center my-2 gap-3">
                  <Image
                    src={listIcon}
                    alt="list about Logo"
                    className="object-fill"
                    width={14}
                    height={14}
                  />
                  <p className="text-primary font-sans text-sm tracking-wider">
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
