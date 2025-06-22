'use server'

import {getPlaceById} from "@/services/place-service";

export async function getPlace(id: number) {
  const place = getPlaceById(id);
  if (!place) {
    return { error: 'Lugar não encontrado' };
  }

  return { place };
}
