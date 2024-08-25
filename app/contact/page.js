"use client";
import { useState } from "react";
import Image from "next/image";
import { STATIC_VALUES } from "@constants/string";
import CustomInput from "@components/CustomInput/CustomInput";
import CustomButton from "@components/CustomButton/CustomButton";
import CustomTextArea from "@components/CustomTextArea/CustomTextArea";
import contactThumbNailLogo from "@public/assets/PNG/contactTarget.png";

function Contact() {
  const { CONTACT, COMMON } = STATIC_VALUES;
  const { TEXT_TYPE, EMAIL_TYPE } = COMMON.INPUT_TYPE;
  const [contactSchema, setContactSchema] = useState({});
  const { NAME, MESSAGE, SUBJECT, EMAIL, SUBMIT } = COMMON.CONTACT_INFO;

  const onChange = (e) => {
    const { value, name } = e?.target;
    setContactSchema({
      ...contactSchema,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="grid grid-cols-1 py-4 md:py-14 border-b-2 border-primary-border w-full">
        <div className="w-full md:w-4/6 mx-auto">
          <p className="text-secondary font-primary font-medium text-3xl text-center">
            {CONTACT.CONTACT_TITLE}
          </p>
          <p className="text-primary font-primary font-medium text-sm mt-2 text-center tracking-wide md:tracking-wider">
            {CONTACT.CONTACT_TITLE_DESC}
          </p>
          <p className="text-primary font-primary font-medium text-sm text-center tracking-wider">
            {CONTACT.CONTACT_TITLE_DESC1}
          </p>
          <div className="grid grid-cols-1 my-2 gap-4">
            <CustomInput
              id={SUBJECT.ID}
              type={TEXT_TYPE}
              title={SUBJECT.TITLE}
              value={contactSchema?.subject}
              onChange={onChange}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>
            <CustomTextArea
              id={MESSAGE.ID}
              type={TEXT_TYPE}
              title={MESSAGE.TITLE}
              onChange={onChange}
              value={contactSchema?.message}
              className={"min-h-24 w-full resize-none"}
            />
            <CustomButton
              title={SUBMIT.TITLE}
              className="uppercase w-36 mx-auto"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 py-4 md:py-14  border-b-2 border-primary-border">
        <Image
          src={contactThumbNailLogo}
          alt="Contact Thumbnail Logo"
          className="object-fill rounded-md w-3/5 mx-auto"
        />
        <div>
          <p className="text-secondary font-primary font-medium text-3xl tracking-widest">
            {CONTACT.CONTACT_TEXT}
          </p>
          <p className="text-primary font-primary font-medium text-base my-4 tracking-wider">
            {CONTACT.CONTACT_DESC1}
          </p>
          <p className="text-primary font-primary font-medium text-base my-4 tracking-wider">
            {CONTACT.CONTACT_DESC2}
          </p>
          <p className="text-primary font-primary font-medium text-base my-4 tracking-wider">
            {CONTACT.CONTACT_DESC3}
          </p>
          <p className="text-primary font-primary font-medium text-base my-4 tracking-wider">
            {CONTACT.CONTACT_SIGN}
          </p>
          <p className="text-secondary font-primary font-medium text-xl my-4 tracking-wider">
            {CONTACT.CONTACT_NAME}
          </p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
