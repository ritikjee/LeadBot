import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const user = await currentUser();

  if (user) redirect("/");

  return (
    <div className="h-screen flex w-full justify-center">
      <div className="w-[600px] ld:w-full flex flex-col items-start p-6 !pb-0">
        <Image
          src="/images/logo.png"
          alt="LOGO"
          sizes="100vw"
          style={{
            width: "20%",
            height: "auto",
          }}
          width={0}
          height={0}
        />
        <div className="h-full w-full overflow-hidden">{children}</div>
      </div>
      <div className="hidden lg:flex flex-1 w-full max-h-screen max-w-4000px overflow-hidden relative bg-cream dark:bg-transparent flex-col pt-10 pl-24 gap-3 ">
        <h2 className="text-gravel dark:text-white md:text-4xl font-bold">
          Hi, I’m your AI powered sales assistant, LeadBot!
        </h2>
        <p className="text-iridium dark:text-white md:text-sm mb-10">
          LeadBot is capable of capturing lead information without a form...{" "}
          <br />
          something never done before 😉
        </p>
        <Image
          src="/images/app-ui.png"
          alt="app image"
          loading="lazy"
          sizes="30"
          className="absolute shrink-0 !w-[1600px] top-48 dark:hidden"
          width={0}
          height={0}
        />
        <Image
          src="/images/app-ui-dark.png"
          alt="app image"
          loading="lazy"
          sizes="30"
          className="absolute shrink-0 !w-[1600px] top-48 hidden dark:block"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
};

export default Layout;
