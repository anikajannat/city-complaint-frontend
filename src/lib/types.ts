export type Role="CITIZEN"|"STAFF"|"ADMIN";
export type User={id:string;name:string;email:string;role:Role;phone?:string;address?:string};
export type Category={id:string;name:string;description?:string};
export type ComplaintStatus="PENDING"|"ASSIGNED"|"IN_PROGRESS"|"RESOLVED"|"REJECTED"|"CANCELLED";
export type Complaint={id:string;title:string;description:string;location:string;status:ComplaintStatus;serviceFee:number|string;createdAt:string;category:Category;citizen?:User;assignedTo?:User;feedback?:{rating:number;comment?:string}|null;payments?:Payment[]};
export type Payment={id:string;amount:number|string;status:string;transactionId:string;createdAt:string;complaint?:{id:string;title:string}};
