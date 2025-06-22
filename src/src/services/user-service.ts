import {readFileSync} from "fs";
import path from "node:path";
import {IUser, ICreateUserDto} from "@/@types/user.interface";
import {v4} from "uuid";

const filePath = path.join(
  "src",
  "db",
  "users.json"
);

function readUsersRaw(): IUser[] {
  const raw = readFileSync(filePath, "utf-8");
  return JSON.parse(raw) ?? [];
}

function writeUsersRaw(users: IUser[]) {
  const data = JSON.stringify(users, null, 2);
  require("fs").writeFileSync(filePath, data, "utf-8");
}

export function createUser(user: ICreateUserDto) {
  const fullUser = user as IUser;

  const users = readUsersRaw();

  fullUser.favorites = [];
  fullUser.id = v4();

  users.push(fullUser);
  writeUsersRaw(users);
}

export function getUserById(id: string) {
  const users = readUsersRaw();
  return users.find((user: IUser) => user.id === id)
}

export function getUserByEmail(email: string) {
  const users = readUsersRaw();
  return users.find((user: IUser) => user.email === email)
}

export function updateUser(user: IUser) {
  const users = readUsersRaw();
  const index = users.findIndex((u: IUser) => u.id === user.id);

  if (index === -1) {
    return null;
  }

  users[index] = user;
  writeUsersRaw(users);

  return user;
}
