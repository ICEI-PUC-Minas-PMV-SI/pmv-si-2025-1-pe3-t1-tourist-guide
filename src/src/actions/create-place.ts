'use server'

import { createPlace as createPlaceService } from "@/services/place-service";
import {ICreatePlaceDto} from "@/@types/place.interface";
import {getSession} from "@/services/session-service";
import {redirect} from "next/navigation";

export async function createPlace(dto: ICreatePlaceDto) {
  const session = await getSession();
  if (!session) {
    return redirect('/')
  }

  return createPlaceService({ ...dto, creatorId: session.userId });
}
