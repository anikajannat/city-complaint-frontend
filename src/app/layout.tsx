import "./globals.css";
import type {Metadata} from "next";
import {Providers} from "@/components/providers";
export const metadata:Metadata={title:{default:"CityCare | Complaint & Service Platform",template:"%s | CityCare"},description:"A transparent city complaint and service request platform for citizens, service staff and administrators."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body><Providers>{children}</Providers></body></html>}
