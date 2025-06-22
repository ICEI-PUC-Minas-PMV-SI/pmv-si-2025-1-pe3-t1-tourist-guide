'use server'

import {getPlaceById} from "@/services/place-service";
import {redirect} from "next/navigation";
import {getSession} from "@/services/session-service";
import {getUserById, updateUser} from "@/services/user-service";
import {listPlaces} from "@/actions/list-places";

export async function getFavorites() {
  const session = await getSession();
  if (!session) {
    return redirect('/')
  }

  const user = getUserById(session.userId);
  if (!user) {
    return redirect('/')
  }

  const { places } = await listPlaces();

  return places.filter(place => user.favorites.includes(place.id))
}
