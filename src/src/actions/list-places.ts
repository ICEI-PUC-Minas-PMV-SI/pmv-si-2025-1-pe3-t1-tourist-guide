'use server'

import {readPlaces} from "@/services/place-service";

export async function listPlaces() {
  return { places: readPlaces() };
}
