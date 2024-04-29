import { db } from '@/lib/db';
import { initialProfile } from '@/lib/inital-profile';
import { redirect } from 'next/navigation';
import React from 'react'

const SetupPage = async() => {
    const profile = await initialProfile();
    const server = await db.server.findFirst({
        where:{
            members:{
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    if(server){
        return redirect(`/servers/${server.id}`)
    }
  return (
    <div>Create Server</div>
  )
}

export default SetupPage;