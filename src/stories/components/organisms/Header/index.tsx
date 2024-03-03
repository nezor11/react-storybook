import { SubtitleCopy } from "@/stories/components/atoms/SubtitleCopy";
import { TitleCopy } from "@/stories/components/atoms/TitleCopy";
import {
  ContactDetail,
  ContactDetailTexts,
} from "@/stories/components/molecules/ContactDetails";
import {
  FrameImage,
  FrameImageProps,
} from "@/stories/components/molecules/FrameImage";

import {
  IconGallery,
  IconGalleryProps,
} from "@/stories/components/molecules/IconGallery";
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
  <header className="flex place-content-between">
    <div className="header__main flex flex-col items-start justify-center">
      {user ? (
        <>
          <TitleCopy
            as="h1"
            text={user.name}
            mods="text-6xl font-medium mb-4"
          />
        </>
      ) : (
        <>
          <TitleCopy as="h1" text="Rodrigor" mods="text-6xl font-medium mb-4" />
        </>
      )}
      <div className="flex items-center">
        {user?.jobTitle ? (
          <>
            <SubtitleCopy
              subtitle="h2"
              text={user?.jobTitle}
              mods="text-4xl uppercase text-gray-400"
            />
          </>
        ) : (
          <>
            <SubtitleCopy
              subtitle="h2"
              text="Papaar papaar"
              mods="text-4xl uppercase text-gray-400"
            />
          </>
        )}
        {user?.iconsData && (
          <>
            <div className="header__aux-gallery-details">
              <IconGallery iconsData={user.iconsData} />
            </div>
          </>
        )}
      </div>
    </div>
    <div className="header__aux flex items-center justify-end">
      {user?.imageDetail && (
        <div className="header__aux-image-details flex items-end justify-end">
          <FrameImage image={user.imageDetail.image} />
        </div>
      )}
      {user?.contactDetail && (
        <div className="header__aux-contact-details flex items-center justify-center">
          <ContactDetail contactDetail={user.contactDetail} />
        </div>
      )}
    </div>
  </header>
);
