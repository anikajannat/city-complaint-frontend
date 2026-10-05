import {LoaderCircle,Inbox} from "lucide-react";
export function PageTitle({title,subtitle,action}:{title:string;subtitle?:string;action?:React.ReactNode}){return <div className="mb-6 flex items-end justify-between gap-3"><div><h1 className="text-2xl md:text-3xl font-black">{title}</h1>{subtitle&&<p className="text-slate-500 mt-1">{subtitle}</p>}</div>{action}</div>}
export function Stat({label,value,hint}:{label:string;value:string|number;hint?:string}){return <div className="card p-5"><div className="text-sm text-slate-500">{label}</div><div className="text-3xl font-black mt-1">{value}</div>{hint&&<div className="text-xs text-slate-400 mt-2">{hint}</div>}</div>}
export function Status({value}:{value:string}){const label=value.replaceAll("_"," ");return <span className="badge">{label}</span>}
export function Loading(){return <div className="card p-10 text-center"><LoaderCircle className="animate-spin mx-auto mb-2"/>Loading data…</div>}
export function Empty({text="No records found"}:{text?:string}){return <div className="card p-10 text-center text-slate-500"><Inbox className="mx-auto mb-2"/>{text}</div>}
