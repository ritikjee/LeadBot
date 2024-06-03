import React from "react";

type Props = {
  min?: boolean;
  domains:
    | {
        id: string;
        name: string;
        icon: string | null;
      }[]
    | null
    | undefined;
};

function DomainMenu({ domains, min }: Props) {
  return <div>DomainMenu</div>;
}

export default DomainMenu;
