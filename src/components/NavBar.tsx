import React from "react";
import Link from "next/link";

interface Props { }

export const NavBar = ( props: Props ) => {
  return (
    <>
      <Link href="/">Home</Link> | <Link href="/about">About</Link> | <Link href="/fake">Fake</Link>
    </>
  );
};
