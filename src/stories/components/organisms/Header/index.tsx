import {
  LazyImage,
  LazyImageProps,
} from "@/stories/components/atoms/LazyImage";
import { SubtitleCopy } from "@/stories/components/atoms/SubtitleCopy";
import { TitleCopy } from "@/stories/components/atoms/TitleCopy";
import {
  ContactDetail,
  ContactDetailTexts,
} from "@/stories/components/molecules/ContactDetails";

import {
  IconGallery,
  IconGalleryProps,
} from "@/stories/components/molecules/IconGallery";
import React from "react";

export interface User extends IconGalleryProps {
  name: string;
  jobTitle?: string;
  contactDetail?: ContactDetailTexts;
  imageDetail?: LazyImageProps;
}

export interface HeaderProps {
  user: User | null;
}

export const Header: React.FC<HeaderProps> = ({ user }) => (
  <header className="flex place-content-between">
    <div className="header__main flex-initial">
      {user ? (
        <>
          <TitleCopy title="h1" text={user.name} mods="text-6xl" />
        </>
      ) : (
        <>
          <TitleCopy title="h1" text="Rodrigor" mods="text-6xl" />
        </>
      )}
      <div className="flex items-baseline text text-xl">
        {user?.jobTitle ? (
          <>
            <SubtitleCopy
              subtitle="h2"
              text={user?.jobTitle}
              mods="text-3xl uppercase"
            />
          </>
        ) : (
          <>
            <SubtitleCopy
              subtitle="h2"
              text="Papaar papaar"
              mods="text-3xl uppercase"
            />
          </>
        )}
        {user?.iconsData && (
          <>
            <IconGallery iconsData={user.iconsData} />
          </>
        )}
      </div>
    </div>
    <div className="header__aux flex flex-none">
      {user?.imageDetail && (
        <LazyImage
          placeholderSrc={user.imageDetail.placeholderSrc}
          src={user.imageDetail.src}
          alt={user.imageDetail.alt}
          className="header__aux-image"
        />
      )}
      {user?.contactDetail && (
        <div className="header__aux-contact-details flex items-center justify-center">
          <ContactDetail contactDetail={user.contactDetail} />
        </div>
      )}
    </div>
  </header>
);
