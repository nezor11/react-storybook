import React from "react";
import { Button } from "../../molecules/Button";

interface User {
  name: string;
}

interface HeaderProps {
  user: User | null;
}

export const Header: React.FC<HeaderProps> = ({ user }) => (
  <header>
    <div className="wrapper">
      <h1>Acme</h1>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button primary size="small" label="Log out" />
          </>
        ) : (
          <>
            <Button primary size="small" label="Log in" />
            <Button primary size="small" label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);
