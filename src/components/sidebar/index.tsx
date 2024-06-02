"use client";

import React from "react";

type Props = {
  domains:
    | {
        id: string;
        name: string;
        status: string;
      }[]
    | null
    | undefined;
};

function Sidebar({ domains }: Props) {
  return <div>Sidebar</div>;
}

export default Sidebar;
