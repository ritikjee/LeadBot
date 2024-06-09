import { onGetCurrentDomainInfo } from "@/actions/settings";
import BotTrainingForm from "@/components/forms/settings/bot-training";
import SettingsForm from "@/components/forms/settings/form";
import InfoBar from "@/components/infobar";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  params: {
    domain: string;
  };
};

async function DomainPage({ params }: Props) {
  const domain = await onGetCurrentDomainInfo(params.domain);
  if (!domain) return redirect("/dashboard");
  return (
    <div className="h-screen overflow-hidden">
      <InfoBar />
      <div className="h-screen overflow-y-scroll pb-52">
        <SettingsForm
          plan={domain.subscription?.plan!}
          chatBot={domain.domains[0].chatBot}
          id={domain.domains[0].id}
          name={domain.domains[0].name}
        />
        <BotTrainingForm id={domain.domains[0].id} />
      </div>
    </div>
  );
}

export default DomainPage;
