import InitialModal from '@/components/modals/InitialModal';
import { db } from '@/lib/db';
import { initialProfile } from '@/lib/inital-profile';
import { redirect } from 'next/navigation';
import React from 'react'

const SetupPage = async() => {
    const profile = await initialProfile();
    // console.log(profile.id);
    
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
    <div>
    <InitialModal />
    </div>
  )
}

export default SetupPage;