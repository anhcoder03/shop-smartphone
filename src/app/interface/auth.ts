export interface ISignin {
  _id?: string;
  email: string;
  password: string;
  success?: boolean;
  message?: string;
  user?: Object;
  accessToken?: string | undefined;
}
export interface ISignup {
  _id?: string;
  fullname: string;
  email: string;
  password: string;
  confirmPassword?: string;
  success?: boolean;
  message?: string;
}

export interface IUser {
  _id?: string;
  fullname: string;
  email: string;
  password: string;
  image: string;
  success?: boolean;
  message?: string;
  avatar: string;
}
