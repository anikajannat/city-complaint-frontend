"use client";
import Link from "next/link";
import {Building2,LogOut,Menu} from "lucide-react";
import {useAuth} from "@/store/auth";
import {useRouter} from "next/navigation";
export function Nav(){
 const {user,logout}=useAuth(); const router=useRouter();
 return <header className="border-b bg-white/90 sticky top-0 z-40 backdrop-blur"><div className="shell h-16 flex items-center justify-between">
  <Link href="/" className="flex items-center gap-2 font-black text-xl"><span className="bg-brand text-white p-2 rounded-xl"><Building2 size={20}/></span>CityCare</Link>
  <nav className="hidden md:flex items-center gap-6 text-sm font-semibold"><Link href="/about">About</Link><Link href="/services">Services</Link><Link href="/faq">FAQ</Link><Link href="/contact">Contact</Link></nav>
  <div className="flex gap-2 items-center">{user?<><Link className="btn btn-soft" href={user.role==="ADMIN"?"/admin":user.role==="STAFF"?"/staff":"/dashboard"}>Dashboard</Link><button className="btn" onClick={()=>{logout();router.push("/")}}><LogOut size={17}/></button></>:<><Link className="btn" href="/login">Login</Link><Link className="btn btn-primary" href="/register">Register</Link></>}</div>
 </div></header>
}
