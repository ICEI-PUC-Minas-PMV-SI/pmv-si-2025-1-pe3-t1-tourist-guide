'use client'
import Image from "next/image";
import {useEffect, useState} from "react";
import Input from "@/components/Input";
import Chip from "@/components/Chip";
import {EPlaceCategory, IPlace} from "@/@types/place.interface";
import PlaceCard from "@/components/PlaceCard";
import {useRouter} from "next/navigation";
import {listPlaces} from "@/actions/list-places";
import toast from "react-hot-toast";
import {IUser} from "@/@types/user.interface";
import {getMe} from "@/actions/get-me";
import {favorite} from "@/actions/favorite";
import {unfavorite} from "@/actions/unfavorite";
import {BottomMenu} from "@/components/BottomMenu";

export default function Home() {
  const router = useRouter()
  const [category, setCategory] = useState(EPlaceCategory.All)
  const [search, setSearch] = useState('')
  const [places, setPlaces] = useState<IPlace[]>([])

  const [favorites, setFavorites] = useState<string[] | null>(null)

  const fetchPlaces = async () => {
    try {
      const res = await listPlaces({ category, search });
      setPlaces(res.places);
    } catch (err) {
      console.error(err)
      toast.error('Ocorreu um erro ao buscar os lugares.')
    }
  }

  const fetchUser = async () => {
    try {
      const res = await getMe();
      setFavorites(res.favorites)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchPlaces()
    fetchUser()
  }, [search, category]);

  const onClick = (category: EPlaceCategory) => {
    setCategory(category);
  }

  const onClickCard = (place: IPlace) => {
    router.push('/local/' + place.id);
  }

  const onClickAdd = () => {
    router.push('/local/cadastro');
  }

  const onFavoriteToggle = async (place: IPlace, newFavorite: boolean) => {
    if (!favorites) return;

    console.log("onFavoriteToggle", place, newFavorite)
    if (newFavorite) {
      setFavorites((fvs) => {
        if (!fvs) return null;
        return [...fvs, place.id];
      })
      await favorite(place.id)
    } else {
      setFavorites(fvs => {
        if (!fvs) return null;
        return fvs.filter(id => id !== place.id)
      })
      await unfavorite(place.id)
    }
  }

  return <div className={"h-full flex flex-col overflow-hidden"}>
    <div className={"w-full bg-slate-900 p-4"}>
      <div className={"flex items-center"}>
        <Image src={'compass.svg'} alt={'Compass'} width={30} height={30}/>
        <span className={"font-extrabold text-white ml-2"}>Tourist Guide</span>
      </div>

      <Input wrapperClassName={"mt-3"} placeholder={"Buscar lugares, cidades, atrações..."} startContent={<Image src={'search.svg'} alt={'Search'} width={20} height={20}/>} value={search} onChange={(e) => setSearch(e.target.value)} />
    </div>
    <div className={"shadow-sm p-3 flex gap-2 overflow-x-auto"}>
      <Chip isSelected={category === EPlaceCategory.All} onClick={() => onClick(EPlaceCategory.All)}>Todos</Chip>
      <Chip isSelected={category === EPlaceCategory.Beach} onClick={() => setCategory(EPlaceCategory.Beach)}>Praias</Chip>
      <Chip isSelected={category === EPlaceCategory.Mountain} onClick={() => setCategory(EPlaceCategory.Mountain)}>Montanhas</Chip>
      <Chip isSelected={category === EPlaceCategory.City} onClick={() => setCategory(EPlaceCategory.City)}>Cidades</Chip>
      <Chip isSelected={category === EPlaceCategory.Park} onClick={() => setCategory(EPlaceCategory.Park)}>Parques</Chip>
      <Chip isSelected={category === EPlaceCategory.Historical} onClick={() => setCategory(EPlaceCategory.Historical)}>Históricos</Chip>
      <Chip isSelected={category === EPlaceCategory.Other} onClick={() => setCategory(EPlaceCategory.Other)}>Outros</Chip>
    </div>

    <div className={"flex flex-col items-center overflow-hidden flex-1"}>
      <div className={"p-4 max-w-[1200px] w-full overflow-y-auto h-full"}>
        <span className={"text-[16px] font-bold text-slate-900 mb-3 block"}>Lugares Populares</span>
        <div className={"flex flex-wrap gap-4"}>
          {places.map(place => <PlaceCard
            key={place.id}
            place={place}
            onClick={onClickCard}
            isFavorite={favorites?.includes(place.id)}
            onFavoriteToggle={onFavoriteToggle}
          />)}
          {places.length === 0 && <span className={"text-gray-500 text-sm"}>Nenhum lugar encontrado.</span>}
        </div>
      </div>
    </div>

  <BottomMenu />
  </div>
}
