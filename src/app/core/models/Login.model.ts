import { IUser } from "./User.model"

export interface ILogin {
  user: IUser
  token: string
}
