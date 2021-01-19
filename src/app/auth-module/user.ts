export class User {
    public name: string;
    public email:string;
    public password:string;
    public c_password:string;
    
    constructor(name: string,email:string,password:string,c_password:string) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.c_password = c_password;
    }
    }
    