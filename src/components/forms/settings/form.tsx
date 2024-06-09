"use client";

import { Loader } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useSettings } from "@/hooks/settings/use-settings";
import PremiumBadge from "@/icons/premium-badge";
import Image from "next/image";
import CodeSnippet from "./code-snippet";
import { DomainUpdate } from "./domain-update";
import EditChatbotIcon from "./edit-chatbot";
import dynamic from "next/dynamic";

const WelcomeMessage = dynamic(
  () => import("./gretting-message").then((props) => props.default),
  {
    ssr: false,
  }
);

type Props = {
  id: string;
  name: string;
  plan: "STANDARD" | "PRO" | "ULTIMATE";
  chatBot: {
    id: string;
    icon: string | null;
    welcomeMessage: string | null;
  } | null;
};

function SettingsForm({ id, name, chatBot, plan }: Props) {
  const {
    register,
    onUpdateSettings,
    errors,
    deleting,
    loading,
    onDeleteDomain,
  } = useSettings(id);
  return (
    <form className="flex flex-col gap-8 pb-10" onSubmit={onUpdateSettings}>
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-2xl">Domain Settings</h2>
        <Separator orientation="horizontal" />
        <DomainUpdate name={name} register={register} errors={errors} />
        <CodeSnippet id={id} />
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <div className="flex gap-4 items-center">
          <h2 className="font-bold text-2xl">Chatbot Settings</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent text-sm font-bold">
              <PremiumBadge />
            </div>
            Premium
          </div>
        </div>
        <Separator orientation="horizontal" />
        <div>
          <div>
            <EditChatbotIcon
              chatBot={chatBot}
              register={register}
              errors={errors}
            />
            <WelcomeMessage
              message={chatBot?.welcomeMessage!}
              register={register}
              errors={errors}
            />
          </div>
        </div>
      </div>
      <div className="flex gap-5 justify-end">
        <Button
          onClick={onDeleteDomain}
          variant="destructive"
          type="button"
          className="px-10 h-[50px]"
        >
          <Loader loading={deleting}>Delete Domain</Loader>
        </Button>
        <Button type="submit" className="w-[100px] h-[50px]">
          <Loader loading={loading}>Save</Loader>
        </Button>
      </div>
    </form>
  );
}

export default SettingsForm;
