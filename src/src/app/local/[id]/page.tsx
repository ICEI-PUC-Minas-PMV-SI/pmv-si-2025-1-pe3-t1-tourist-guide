'use client'
import {useParams, useRouter} from "next/navigation";
import Image from "next/image";
import {useEffect, useState} from "react";
import {EPlaceCategory, IPlace} from "@/@types/place.interface";
import toast from "react-hot-toast";
import {getPlace} from "@/actions/get-place";
import CategoryChip from "@/components/CategoryChip";
import {Heart} from "phosphor-react";
import {getMe} from "@/actions/get-me";
import {unfavorite} from "@/actions/unfavorite";
import {favorite} from "@/actions/favorite";

export default function PlacePage() {
  const router = useRouter()
  const { id } = useParams();
  const [place, setPlace] = useState<IPlace | null>(null)
  const [isFavorite, setIsFavorite] = useState(false)

  const goBack = () => {
    router.back();
  }

  const favoriteSwitch = async () => {
    if (isFavorite) {
      setIsFavorite(false);
      await unfavorite(id as string);
    } else {
      setIsFavorite(true);
      await favorite(id as string);
    }
  }

  const fetchUser = async () => {
    try {
      const user = await getMe();
      setIsFavorite(user.favorites.includes(id as string) ?? false);
    } catch (err) {
      console.error(err)
    }
  }

  const fetchPlace = async () => {
    try {
      const res = await getPlace(id as string);

      if (res.error) {
        toast.error(res.error);
        return;
      }

      if (res.place) {
        setPlace(res.place);
      }
    } catch (error) {
      console.error(error)
      toast.error('Ocorreu um erro ao buscar o lugar.');
    }
  };

  useEffect(() => {
    fetchPlace();
    fetchUser();
  }, []);

  return <div className={"h-full overflow-y-auto flex flex-col"}>
    <button onClick={goBack}
            className={"sticky left-2 top-2 z-20 bg-white rounded-full! w-[30px]! min-h-[30px] h-[30px]! flex items-center justify-center"}>
      <Image src={"/arrow-left.svg"} alt={"Voltar"} width={20} height={20}/>
    </button>
    <button onClick={favoriteSwitch}
            className={"absolute right-6 top-2 bg-white rounded-full! w-[30px]! min-h-[30px] h-[30px]! flex items-center justify-center"}>
      <Heart className={"cursor-pointer"} size={20} weight={isFavorite ? "fill" : "regular"} />
    </button>
    <div className={"w-full h-[220px] bg-sky-400 -mt-[30px]"}>
      {place?.imageUrls?.[0] && <Image src={place?.imageUrls?.[0]} alt={"Fundo"} width={800} height={200}
                                 className={"w-full h-full object-fit-cover"}/>}
    </div>
    <div className={"bg-white rounded-top-4 -mt-6 p-3 z-10 flex-1"}>
      <div className={"flex"}>
        <div className={"flex flex-col"}>
          <h1 className={"font-bold! text-[22px]!"}>{place?.title}</h1>
          <div className={"flex items-center"}>
            <Image src={"/map-pin.svg"} alt={"Localização"} width={18} height={18}/>
            <span className={"text-sm ml-1 text-slate-500"}>{place?.location}</span>
          </div>
        </div>

        <CategoryChip className={"ml-auto"} category={place?.category ?? EPlaceCategory.Other}/>
      </div>

      <h2 className={"font-bold! text-[18px]! mt-3"}>Descrição</h2>

      <p className={"text-sm text-slate-500"}>{place?.content}</p>
    </div>
  </div>
}
