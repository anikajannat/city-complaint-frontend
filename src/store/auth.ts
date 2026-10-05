"use client";
import {create} from "zustand";
import type {User} from "@/lib/types";
type State={user:User|null;hydrated:boolean;setAuth:(token:string,user:User)=>void;logout:()=>void;hydrate:()=>void};
export const useAuth=create<State>((set)=>({
 user:null,hydrated:false,
 setAuth:(token,user)=>{localStorage.setItem("citycare_token",token);localStorage.setItem("citycare_user",JSON.stringify(user));set({user,hydrated:true})},
 logout:()=>{localStorage.removeItem("citycare_token");localStorage.removeItem("citycare_user");set({user:null,hydrated:true})},
 hydrate:()=>{try{const x=localStorage.getItem("citycare_user");set({user:x?JSON.parse(x):null,hydrated:true})}catch{set({user:null,hydrated:true})}}
}));
