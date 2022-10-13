import { AccountModel } from "../models"

type AuthenticationParams = {
  email: string
  password: string
}

export interface Authentication {
  auth(parmas: AuthenticationParams): Promise<AccountModel>
}