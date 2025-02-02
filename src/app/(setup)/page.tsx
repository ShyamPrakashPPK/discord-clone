import { InitialMode } from "@/components/modals/initial-model";
import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile"
import { redirect } from "next/navigation";



const SetupPage = async () => {
    const profile = await initialProfile();
    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    })

    if (server) {
        return redirect(`/server/${server.id}`)
    }

    return <InitialMode/>
}

export default SetupPage