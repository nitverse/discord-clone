import ChatHeader from "@/components/chat/ChatHeader";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { FC } from "react";

interface pageProps {
  params: {
    serverId: string;
    channelId: string;
  };
}

const page: FC<pageProps> = async ({ params }) => {
  const profile = await currentProfile();
  
  if (!profile) {
    redirect("/");
  }

  const channel = await db.channel.findUnique({
    where: {
      id: params.channelId
    }
  });

  const member = await db.member.findFirst({
    where: {
      id: params.serverId,
      profileId: profile?.id
    }
  });

  if (!channel || !member) {
    // console.log(channel);
    console.log(member);
    // redirect("/");
  }
  
  return (
    <div className="bg-white dark:bg-[#313338] flex flex-col h-full">
      <ChatHeader name={channel.name} serverId={channel.serverId} type="channel" />
      Chat MEssages
      chat input
    </div>
  );
};

export default page;
