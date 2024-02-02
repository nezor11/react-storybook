import React from "react";
import { SubtitleCopy } from "../../atoms/SubtitleCopy";
import { TitleCopy } from "../../atoms/TitleCopy";

export interface User {
  name: string;
  jobTitle: string;
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
  </header>
);
