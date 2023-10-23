'use client'

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthContext } from "@/context/AuthContext";
import logout from "../../firebase/auth/logout";

const Page = () => {

    const router = useRouter();

    const { user } = useAuthContext()

    useEffect(() => {
        if (user == null) router.push("/")
        else {
            // logout()
        }
    }, [user])
    return <div className="max-w-5xl mx-auto">
        <button className="bg-red-500 p-3" onClick={logout}>Logout</button>
        Loggin User out
    </div>

}


export default Page;