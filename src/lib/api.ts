const API=process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api/v1";
export async function api<T>(path:string,options:RequestInit={}):Promise<T>{
  const token=typeof window!=="undefined"?localStorage.getItem("citycare_token"):null;
  const res=await fetch(`${API}${path}`,{...options,headers:{"Content-Type":"application/json",...(token?{Authorization:`Bearer ${token}`}:{ }),...(options.headers||{})},cache:"no-store"});
  const body=await res.json().catch(()=>({message:"Unexpected server response"}));
  if(!res.ok) throw new Error(body.message||"Request failed");
  return body.data as T;
}
