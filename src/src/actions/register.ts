'use server'

import {createUser} from "@/services/user-service";

export async function register(name: string, email: string, password: string) {
  createUser({
    email,
    password,
    name,
  });

  return { success: true }
}
