'use server'

import {readPlaces} from "@/services/place-service";
import {EPlaceCategory} from "@/@types/place.interface";

export interface IListFilter {
  category?: string;
  search?: string;
}

export async function listPlaces({ category, search }: IListFilter = {}) {
  const places = readPlaces().filter(place => {
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
