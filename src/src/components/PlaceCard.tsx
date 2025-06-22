import {IPlace, readablePlaceCategories} from "@/@types/place.interface";
import Image from "next/image";

interface IPlaceCardProps {
  place: IPlace
  onClick?: (place: IPlace) => void;
}

export default function PlaceCard({ place, onClick }: IPlaceCardProps) {
  const textCut = place.content.slice(0, 180);
  const textSuffix = place.content.length > 180 ? '...' : '';

  return <div className={"shadow-lg bg-white rounded-md w-[380px] cursor-pointer"} onClick={() => onClick?.(place)}>
    <Image src={place.imageUrl} alt={place.title} width={380} height={200} className={"rounded-top-2"}/>
    <div className={"p-3"}>
      <div className={"flex"}>
        <div>
          <h3 className={"text-[18px]! font-bold!"}>{place.title}</h3>
          <h4 className={"text-[14px]! font-[400]! text-gray-500!"}>{place.location}</h4>
        </div>
        <div className={"rounded-full bg-blue-400/20 px-2 py-1 text-blue-800 w-fit h-fit text-[12px] ml-auto"}>
          {readablePlaceCategories[place.category]}
        </div>
      </div>
      <p className={"text-[14px]! font-[400]! text-gray-500! mt-2! block text-ellipsis"}>{textCut}{textSuffix}</p>
    </div>
  </div>
}
