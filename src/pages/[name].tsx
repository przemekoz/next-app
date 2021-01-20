import React from "react";
import { useRouter } from "next/router";

interface Props { }

const Name = ( props: Props ) => {
  const router = useRouter();
  const { name } = router.query;

  console.log( name );

  return (
    <>
      This will be dynamic
    </>
  );
};

export default Name;