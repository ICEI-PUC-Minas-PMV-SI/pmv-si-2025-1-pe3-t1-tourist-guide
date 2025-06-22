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

export interface IPlace {
  id: number;
  title: string;
  location: string;
  content: string;
  imageUrl: string;
  category: EPlaceCategory;
  creatorId: number;
  createdAt: string;
  updatedAt: string;
}
