import React from "react";

interface User {
  name: string;
  jobTitle: string;
}

interface HeaderProps {
  user: User | null;
}

export const Header: React.FC<HeaderProps> = ({ user }) => (
  <header>{user ? <></> : <></>}</header>
);
