'use server'

import {readPlacesRaw} from "@/services/place-service";
import {EPlaceCategory} from "@/@types/place.interface";
import {getSession} from "@/services/session-service";
import {redirect} from "next/navigation";

export interface IListFilter {
  category?: string;
  search?: string;
}

export async function listPlaces({ category, search }: IListFilter = {}) {
  const session = await getSession();
  if (!session) {
    return redirect('/')
  }

  const places = readPlacesRaw().filter(place => {
    if (category && category !== EPlaceCategory.All && place.category !== category) {
      return false;
    }

    if (search && !place.title.toLowerCase().includes(search.toLowerCase())) {
      return false;
    }

    return true;
  });

  return { places };
}
