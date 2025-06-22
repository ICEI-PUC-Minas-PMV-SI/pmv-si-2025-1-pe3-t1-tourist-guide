import {EPlaceCategory, readablePlaceCategories} from "@/@types/place.interface";
import clsx from "clsx";

interface ICategoryChipProps {
  category: EPlaceCategory;
  className?: string;
}

export default function CategoryChip({ category, className }: ICategoryChipProps) {
  return <div className={clsx("rounded-full bg-blue-400/20 px-2 py-1 text-blue-800 w-fit h-fit text-[12px]", className)}>
    {readablePlaceCategories[category]}
  </div>
}
