'use server'

import {getPlaceById} from "@/services/place-service";
import {redirect} from "next/navigation";
import {getSession} from "@/services/session-service";

export async function getPlace(id: string) {
  const session = await getSession();
  if (!session) {
    return redirect('/')
  }

  const place = getPlaceById(id);
  if (!place) {
    return { error: 'Lugar não encontrado' };
  }

  return { place };
}
