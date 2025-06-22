'use client'
import {BottomMenu} from "@/components/BottomMenu";
import {CaretLeft, Compass} from "phosphor-react";
import {useEffect, useState} from "react";
import {IPlace} from "@/@types/place.interface";
import {getFavorites} from "@/actions/get-favorites";
import PlaceCard from "@/components/PlaceCard";
import {useRouter} from "next/navigation";
import {unfavorite} from "@/actions/unfavorite";
import toast from "react-hot-toast";

export default function FavoritesPage() {
  const router = useRouter();
  const [favorites, setFavorites] = useState<IPlace[]>([])

  const fetchFavorites = async () => {
    const places = await getFavorites();
    setFavorites(places);
  }

  useEffect(() => {
    fetchFavorites();
  }, []);

  const onClickPlace = (place: IPlace) => {
    router.push('/local/' + place.id);
  }

  const onUnfavorite = async (place: IPlace) => {
    const updatedFavorites = favorites.filter(fav => fav.id !== place.id);
    setFavorites(updatedFavorites);

    try {
      await unfavorite(place.id);
    } catch (error) {
      console.error('Error unfavoriting place:', error);
      toast.error('Ocorreu um erro ao remover o local dos favoritos.');
    }
  }

  return <div className={"h-full flex flex-col"}>
    <div className={"bg-slate-900 flex items-center p-3"}>
      <Compass color={"white"} size={24}/>
      <span className={"text-white font-extrabold ml-2"}>Favoritos</span>
    </div>
    <div className={"flex-1 flex-wrap flex overflow-y-auto gap-3 p-4"}>
      {favorites.map(place => <PlaceCard place={place} key={place.id} onClick={onClickPlace} isFavorite={true} onFavoriteToggle={onUnfavorite}/>)}
    </div>
    <BottomMenu/>
  </div>
}
