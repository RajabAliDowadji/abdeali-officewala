"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { STATIC_VALUES } from "@constants/string";
import githubIcon from "@public/assets/SVG/github.svg";
import twitterIcon from "@public/assets/SVG/twitter.svg";
import linkedinIcon from "@public/assets/SVG/linkedin.svg";
import instagramIcon from "@public/assets/SVG/instagram.svg";
import CustomInput from "@components/CustomInput/CustomInput";
import CustomTextArea from "@components/CustomTextArea/CustomTextArea";
import CustomButton from "@components/CustomButton/CustomButton";

function Footer() {
  const { COMMON } = STATIC_VALUES;
  const [contactSchema, setContactSchema] = useState({});
  const { TEXT_TYPE, EMAIL_TYPE } = COMMON.INPUT_TYPE;
  const { TWITTER, LINKEDIN, GITHUB, INSTAGRAM } = COMMON.SOCIAL_LINKS;
  const { NAME, MESSAGE, SUBJECT, EMAIL, SUBMIT } = COMMON.CONTACT_INFO;

  const onChange = (e) => {
    const { value, name } = e?.target;
    setContactSchema({
      ...contactSchema,
      [name]: value,
    });
  };

  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-14 w-full bg-primary">
        <div>
          <p className="text-primary font-primary text-3xl md:text-5xl tracking-widest">
            {COMMON.LETS_CONNECT}
          </p>
          <div className="flex justify-start items-center my-1 flex-wrap tracking-wider">
            <p className="text-primary font-primary text-lg mr-1">
              {COMMON.SAY_HELLO}
            </p>
            <Link
              href="mailto:abdalivora786@gmail.com"
              passHref={true}
              className="text-secondary font-primary cursor-pointer text-lg hover:underline underline-offset-4  tracking-widest"
            >
              {COMMON.MY_GMAIL}
            </Link>
          </div>
          <div className="flex justify-start items-center my-1">
            <p className="text-primary font-primary text-lg mr-1 tracking-wider">
              {COMMON.RESUME_TEXT}
            </p>
            <p className="text-secondary font-primary cursor-pointer text-lg hover:underline underline-offset-4 tracking-widest">
              {COMMON.RESUME}
            </p>
          </div>
          <div className="flex justify-start items-center my-3 gap-5">
            <Link href={LINKEDIN} passHref={true}>
              <Image
                src={linkedinIcon}
                alt="Linkedin Logo"
                width={32}
                height={32}
              />
            </Link>
            <Link href={GITHUB} passHref={true}>
              <Image
                src={githubIcon}
                alt="Github Logo"
                width={32}
                height={32}
              />
            </Link>
            <Link href={INSTAGRAM} passHref={true}>
              <Image
                src={instagramIcon}
                alt="Instagram Logo"
                width={32}
                height={32}
              />
            </Link>
            <Link href={TWITTER} passHref={true}>
              <Image
                src={twitterIcon}
                alt="Twitter Logo"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>
        <div>
          <CustomInput
            id={NAME.ID}
            type={TEXT_TYPE}
            title={NAME.TITLE}
            value={contactSchema?.name}
            onChange={onChange}
          />
          <CustomInput
            id={EMAIL.ID}
            type={EMAIL_TYPE}
            title={EMAIL.TITLE}
            value={contactSchema?.email}
            onChange={onChange}
          />
          <CustomInput
            id={SUBJECT.ID}
            type={TEXT_TYPE}
            title={SUBJECT.TITLE}
            value={contactSchema?.subject}
            onChange={onChange}
          />
          <CustomTextArea
            id={MESSAGE.ID}
            type={TEXT_TYPE}
            title={MESSAGE.TITLE}
            onChange={onChange}
            value={contactSchema?.message}
            className={"min-h-24 w-full resize-none"}
          />
          <CustomButton title={SUBMIT.TITLE} className="uppercase w-36" />
        </div>
      </div>
    </div>
  );
}
export default Footer;
