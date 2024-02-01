import React from "react";
import { TitleCopy } from "../../atoms/TitleCopy";

interface User {
  name: string;
  jobTitle: string;
}

interface HeaderProps {
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
  </header>
);
