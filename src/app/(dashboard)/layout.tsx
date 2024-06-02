import { onLoginUser } from "@/actions/auth";
import { ChatProvider } from "@/context/use-chat-context";

import React from "react";

type Props = {
  children: React.ReactNode;
};

async function OwnerLayout({ children }: Props) {
  const authenticated = await onLoginUser();
  if (!authenticated) return null;

  return (
    <ChatProvider>
      <div className="flex h-screen w-full">
        <div className="w-full h-screen flex flex-col pl-20 md:pl-4">
          {children}
        </div>
      </div>
    </ChatProvider>
  );
}

export default OwnerLayout;
