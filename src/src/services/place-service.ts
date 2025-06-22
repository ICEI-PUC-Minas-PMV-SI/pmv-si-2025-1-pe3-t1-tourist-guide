import {readFileSync} from "fs";
import path from "node:path";
import {ICreatePlaceDto, IPlace} from "@/@types/place.interface";
import {writeFileSync} from "node:fs";
import {v4} from "uuid";

const filePath = path.join(
  "src",
  "db",
  "places.json"
)

export function readPlacesRaw(): IPlace[] {
  const raw = readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) ?? [];
}

export function writePlacesRaw(places: IPlace[]) {
  const raw = JSON.stringify(places, null, 2);
  writeFileSync(filePath, raw, 'utf-8');
}

export function getPlaceById(id: string) {
  const places = readPlacesRaw();
  return places.find(place => place.id === id);
}

export function createPlace(place: ICreatePlaceDto & { creatorId: string }) {
  const fullPlace = place as IPlace;

  fullPlace.id = v4();
  fullPlace.createdAt = new Date().toISOString();
  fullPlace.updatedAt = new Date().toISOString();

  const places = readPlacesRaw();
  places.push(fullPlace);

  writePlacesRaw(places);

  return fullPlace;
}
