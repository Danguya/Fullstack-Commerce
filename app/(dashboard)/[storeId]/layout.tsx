import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import prismadb from "@/lib/prismadb";

export default async function Dashboardlayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: {storeId: string}
}){
    const {userId} = auth();
    if(!userId){
        redirect('/sign-in')
    }

    const store = await prismadb.store.findFirst({
        where:{
            id: params.storeId,
            userId
        }
    })

    if(!store){
        redirect('/')
    }
    return (
        <>
            <h1>Whis will be a Navbar</h1>
            {children}
        </>
    )
}