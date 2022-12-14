import { Role } from "./Role.enum"

export interface IUser {
  id: string
  username: string
  password?: string
  role: Role
}
