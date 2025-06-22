'use server'

import {getUserByEmail} from "@/services/user-service";

export async function login(email: string, password: string) {
  const user = getUserByEmail(email)

  if (!user) {
    return { error: 'Credenciais inválidas' }
  }

  if (user.password !== password) {
    return { error: 'Credenciais inválidas' }
  }

  return { user }
}
