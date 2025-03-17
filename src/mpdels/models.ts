
export  interface User {
    id?:number;
    FullName?: string;
    email?: string;
    password?: string;
   role?:string;
  }
  
  export interface UserData {
    Token?: string;
    User?: User;
  }
 