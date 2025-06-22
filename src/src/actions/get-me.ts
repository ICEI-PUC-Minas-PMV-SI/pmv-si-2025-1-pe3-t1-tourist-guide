'use server'

import {getPlaceById} from "@/services/place-service";
import {redirect} from "next/navigation";
import {getSession} from "@/services/session-service";
import {getUserById, updateUser} from "@/services/user-service";

export async function getMe() {
  const session = await getSession();
  if (!session) {
    return redirect('/')
  }

  const user = getUserById(session.userId);
  if (!user) {
    return redirect('/')
  }

  return user;
}
