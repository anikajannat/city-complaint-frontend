"use client";
import {useQuery,useMutation,useQueryClient} from "@tanstack/react-query";import {api} from "./api";import type {Complaint,Category,Payment,User} from "./types";
export const useComplaints=(qs="")=>useQuery({queryKey:["complaints",qs],queryFn:()=>api<{items:Complaint[];total:number;page:number;totalPages:number}>(`/complaints${qs}`)});
export const useCategories=()=>useQuery({queryKey:["categories"],queryFn:()=>api<Category[]>("/categories")});
export const usePayments=()=>useQuery({queryKey:["payments"],queryFn:()=>api<Payment[]>("/payments")});
export const useUsers=(role="")=>useQuery({queryKey:["users",role],queryFn:()=>api<User[]>(`/users${role?`?role=${role}`:""}`)});
