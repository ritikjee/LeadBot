import React from "react";

type MinMenuProps = {
  onShrink(): void;
  current: string;
  onSignOut(): void;
  domains:
    | {
        id: string;
        name: string;
        icon: string | null;
      }[]
    | null
    | undefined;
};

function MinMenu({}: MinMenuProps) {
  return <div>MinMenu</div>;
}

export default MinMenu;
