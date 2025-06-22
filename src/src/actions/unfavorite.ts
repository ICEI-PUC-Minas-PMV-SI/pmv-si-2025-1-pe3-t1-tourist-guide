'use server'

import {redirect} from "next/navigation";
import {getSession} from "@/services/session-service";
import {getUserById, updateUser} from "@/services/user-service";

export async function unfavorite(id: string) {
  const session = await getSession();
  if (!session) {
    return redirect('/')
  }

  const user = getUserById(session.userId);
  if (!user) {
    return redirect('/')
  }

  user.favorites = user.favorites.filter(favorite => favorite !== id);

  updateUser(user);

  return user.favorites;
}
