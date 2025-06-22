export enum EPlaceCategory {
  All = "all",
  Beach = "beach",
  Mountain = "mountain",
  City = "city",
  Park = "park",
  Historical = "historical",
  Other = "other",
}

export const readablePlaceCategories: Record<EPlaceCategory, string> = {
  [EPlaceCategory.All]: "Todos",
  [EPlaceCategory.Beach]: "Praia",
  [EPlaceCategory.Mountain]: "Montanha",
  [EPlaceCategory.City]: "Cidade",
  [EPlaceCategory.Park]: "Parque",
  [EPlaceCategory.Historical]: "Histórico",
  [EPlaceCategory.Other]: "Outro",
};

export interface ICreatePlaceDto {
  title: string;
  location: string;
  content: string;
  category: EPlaceCategory;
  imageUrls: string[];
}

export interface IPlace extends ICreatePlaceDto {
  creatorId: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}
