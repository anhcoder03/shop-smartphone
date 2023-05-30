export interface ISignin {
  id?: string,
  email: string,
  password: string,
}
export interface ISignup {
  id?: string,
  fullname: string,
  email: string,
  password: string,
  confirmPassword?: string,
}
