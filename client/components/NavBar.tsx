"use client";

import React, { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();

  return (
    <div className="nav-bar">
      <div className="nav-container">
        <div className="nav-logo">MyApp</div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        {isLoading ? (
          <span>Loading...</span>
        ) : user ? (
          <>
            <span>Welcome, {user.name}</span>
            <a href="/auth/logout">Logout</a>
          </>
        ) : (
          <a href="/auth/login">Login</a>
        )}
      </div>
    </div>
  );
}
