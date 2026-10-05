"use client";
import {useAuth} from "@/store/auth"; import type {Role} from "@/lib/types"; import {useRouter} from "next/navigation"; import {useEffect} from "react";
export function AuthGuard({roles,children}:{roles:Role[];children:React.ReactNode}){const {user,hydrated}=useAuth();const router=useRouter();useEffect(()=>{if(hydrated&&(!user||!roles.includes(user.role)))router.replace("/login")},[hydrated,user,roles,router]);if(!hydrated||!user||!roles.includes(user.role))return <div className="p-10 text-center">Checking access…</div>;return <>{children}</>}
