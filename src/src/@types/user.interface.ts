export interface ICreateUserDto {
  name: string;
  email: string;
  password: string;
}

export interface IUser extends ICreateUserDto {
  id: string;
  favorites: string[];
}
