"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function NavBar() {
  const { user, isLoading } = useUser();

  return (
    <div className="nav-bar">
      <div className="nav-container">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        {isLoading ? (
          <span>Loading...</span>
        ) : user ? (
          <>
            <span>Welcome, {user.name}</span>
            <Link href="/auth/logout">Logout</Link>
          </>
        ) : (
          <Link href="/auth/login">Login</Link>
        )}
      </div>
    </div>
  );
}
