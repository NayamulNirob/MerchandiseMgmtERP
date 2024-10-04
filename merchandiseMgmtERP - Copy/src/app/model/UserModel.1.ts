
export class UserModel {
  id!: string;
  name!: string;
  email!: string;
  password!: string;
  image!: string;
  role!: string;
}


export enum role {
  
  ADMIN = 'Admin',
  USER = 'user',
  
}
