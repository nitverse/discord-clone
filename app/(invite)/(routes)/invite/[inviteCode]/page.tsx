import { FC } from "react";
import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

interface inviteCodeProps {
  params: {
    inviteCode: string;
  };
}

const InviteCodePage: FC<inviteCodeProps> = async ({ params }) => {
  const profile = await currentProfile();

  if (!profile) return redirect("/");

  if (!params.inviteCode) return redirect("/");

  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode,
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (existingServer) return redirect(`/servers/${existingServer.id}`);

  const serverToUpdate = await db.server.findFirst({
    where: {
      inviteCode: params.inviteCode,
    },
  });

  if (!serverToUpdate) {
    return null;
  }

  const updatedServer = await db.server.update({
    where: {
      id: serverToUpdate.id,
    },
    data: {
      members: {
        create: [
          {
            profileId: profile.id,
          },
        ],
      },
    },
  });

  if (updatedServer) return redirect(`/servers/${updatedServer.id}`);

  return null;
};

export default InviteCodePage;
