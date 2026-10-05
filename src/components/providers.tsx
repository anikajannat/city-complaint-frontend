"use client";
import {QueryClient,QueryClientProvider} from "@tanstack/react-query";
import {useState,useEffect} from "react";
import {Toaster} from "sonner";
import {useAuth} from "@/store/auth";
export function Providers({children}:{children:React.ReactNode}){
 const [client]=useState(()=>new QueryClient({defaultOptions:{queries:{staleTime:30000,retry:1}}}));
 const hydrate=useAuth(s=>s.hydrate); useEffect(()=>hydrate(),[hydrate]);
 return <QueryClientProvider client={client}>{children}<Toaster richColors position="top-right"/></QueryClientProvider>
}
