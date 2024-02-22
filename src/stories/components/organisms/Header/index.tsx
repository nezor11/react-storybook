import { SubtitleCopy } from "@/stories/components/atoms/SubtitleCopy";
import { TitleCopy } from "@/stories/components/atoms/TitleCopy";
import {
  IconGallery,
  IconGalleryProps,
} from "@/stories/components/molecules/IconGallery";
import React from "react";

export interface User extends IconGalleryProps {
  name: string;
  jobTitle?: string;
}

export interface HeaderProps {
  user: User | null;
}

export const Header: React.FC<HeaderProps> = ({ user }) => (
  <header>
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
  </header>
);
