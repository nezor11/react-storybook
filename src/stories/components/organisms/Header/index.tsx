/**
 * Header is a component that displays the header section of a webpage.
 *
 * Props:
 * - user: An object containing user details such as name, job title, contact details, and image details. Optional.
 *
 * Example usage:
 * <Header
 *   user={{
 *     name: "John Doe",
 *     jobTitle: "Software Engineer",
 *     contactDetail: { title: "Contact", email: "john.doe@example.com", phone: "+1234567890" },
 *     imageDetail: { src: "profile.jpg", alt: "Profile Image" },
 *     iconsData: [{ name: "icon1", width: "24", height: "24" }]
 *   }}
 * />
 */

import { SubtitleCopy } from "@/stories/components/atoms/SubtitleCopy";
import { TitleCopy } from "@/stories/components/atoms/TitleCopy";
import {
  ContactDetail,
  type ContactDetailTexts,
} from "@/stories/components/molecules/ContactDetails";
import {
  FrameImage,
  type FrameImageProps,
} from "@/stories/components/molecules/FrameImage";

import {
  IconGallery,
  type IconGalleryProps,
} from "@/stories/components/molecules/IconGallery";
// biome-ignore lint/style/useImportType: <explanation>
import React from "react";

import "./index.css";

export interface User extends IconGalleryProps {
  name: string;
  jobTitle?: string;
  contactDetail?: ContactDetailTexts;
  imageDetail?: FrameImageProps;
}

export interface HeaderProps {
  user: User | null;
}

export const Header: React.FC<HeaderProps> = ({ user }) => (
  <header className="flex place-content-between lg:mb-16">
    <div className="header__main flex flex-col items-start justify-center basis-2/3 lg:basis-3/4">
      {user ? (
        <>
          <TitleCopy as="h1" text={user.name} mods="font-medium text-header" />
        </>
      ) : (
        <>
          <TitleCopy as="h1" text="Rodrigor" mods="font-medium text-header" />
        </>
      )}
      <div className="flex flex-col lg:flex-row flex-wrap lg:items-center">
        {user?.jobTitle ? (
          <>
            <SubtitleCopy
              subtitle="h2"
              text={user?.jobTitle}
              mods="text-subheader uppercase text-gray-400"
            />
          </>
        ) : (
          <>
            <SubtitleCopy
              subtitle="h2"
              text="Papaar papaar"
              mods="text-subheader uppercase text-gray-400"
            />
          </>
        )}
        {user?.iconsData && (
          <div className="header__aux-gallery-details">
            <IconGallery iconsData={user.iconsData} />
          </div>
        )}
      </div>
    </div>
    <div className="header__aux flex items-start justify-end basis-1/3 lg:basis-1/4 lg:items-center">
      {user?.imageDetail && (
        <div className="header__aux-image-details flex items-end justify-end">
          <FrameImage image={user.imageDetail.image} />
        </div>
      )}
      {user?.contactDetail && (
        <div className="header__aux-contact-details items-center justify-center hidden lg:flex">
          <ContactDetail contactDetail={user.contactDetail} />
        </div>
      )}
    </div>
  </header>
);
