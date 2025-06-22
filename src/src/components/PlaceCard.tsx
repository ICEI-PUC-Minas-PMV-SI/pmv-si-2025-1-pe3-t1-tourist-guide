import {IPlace} from "@/@types/place.interface";
import Image from "next/image";
import CategoryChip from "@/components/CategoryChip";
import {Heart} from "phosphor-react";

interface IPlaceCardProps {
  place: IPlace
  onClick?: (place: IPlace) => void;
  isFavorite?: boolean;
  onFavoriteToggle?: (place: IPlace, newFavorite: boolean) => void;
}

export default function PlaceCard({ place, onClick, isFavorite, onFavoriteToggle }: IPlaceCardProps) {
  const textCut = place.content.slice(0, 180);
  const textSuffix = place.content.length > 180 ? '...' : '';

  return <div className={"shadow-lg bg-white rounded-md w-[380px] max-h-[450px] cursor-pointer"} onClick={() => onClick?.(place)}>
    <Image src={place?.imageUrls?.[0]} alt={place.title} width={380} height={200} className={"rounded-top-2"}/>
    <div className={"p-3"}>
      <div className={"flex"}>
        <div>
          <h3 className={"text-[18px]! font-bold!"}>{place.title}</h3>
          <h4 className={"text-[14px]! font-[400]! text-gray-500!"}>{place.location}</h4>
        </div>
        <CategoryChip className={"ml-auto"} category={place.category} />
      </div>
      <p className={"text-[14px]! font-[400]! text-gray-500! mt-2! block text-ellipsis"}>{textCut}{textSuffix}</p>
      <div className={"flex justify-end"}>
        <button onClick={(ev) => {
          ev.preventDefault()
          ev.stopPropagation()
          onFavoriteToggle?.(place, !isFavorite)
        }}
                className={"bg-white rounded-full! w-[30px]! min-h-[30px] h-[30px]! flex items-center justify-center"}>
          <Heart className={"cursor-pointer"} size={20} weight={isFavorite ? "fill" : "regular"}/>
        </button>
      </div>
    </div>
  </div>
}
