import {readFileSync} from "fs";
import path from "node:path";
import {IPlace} from "@/@types/place.interface";
import {writeFileSync} from "node:fs";

const filePath = path.join(
  "src",
  "db",
  "users.json"
)

export function readPlaces(): IPlace[] {
  const raw = readFileSync(filePath, 'utf-8');
  return JSON.parse(raw) ?? [];
}

export function writePlaces() {
  const places = readPlaces();
  const raw = JSON.stringify(places, null, 2);
  writeFileSync(filePath, raw, 'utf-8');
}

export function getPlaceById(id: number) {
  const places = readPlaces();
  return places.find(place => place.id === id);
}
