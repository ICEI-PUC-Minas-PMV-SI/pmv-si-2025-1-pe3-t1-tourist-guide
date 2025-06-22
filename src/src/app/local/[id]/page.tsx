'use client'
import {useParams, useRouter} from "next/navigation";
import Image from "next/image";
import {useEffect, useState} from "react";
import {IPlace} from "@/@types/place.interface";
import toast from "react-hot-toast";
import {getPlace} from "@/actions/get-place";

export default function PlacePage() {
  const router = useRouter()
  const { id } = useParams();
  const [place, setPlace] = useState<IPlace | null>(null)

  const goBack = () => {
    router.back();
  }

  const fetchPlace = async () => {
    try {
      const res = await getPlace(parseInt(id as string));

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
  }, []);

  return <div className={"h-full overflow-y-auto flex flex-col"}>
    <button onClick={goBack} className={"sticky left-2 top-2 z-20 bg-white rounded-full! w-[30px]! min-h-[30px] h-[30px]! flex items-center justify-center"}>
      <Image src={"/arrow-left.svg"} alt={"Voltar"} width={20} height={20}/>
    </button>
    <div className={"w-full h-[220px] bg-sky-400 -mt-[30px]"}>
      {place?.imageUrl && <Image src={place.imageUrl} alt={"Fundo"} width={800} height={200}
                                 className={"w-full h-full object-fit-cover"}/>}
    </div>
    <div className={"bg-white rounded-top-4 -mt-6 p-3 z-10 flex-1"}>
      <h1 className={"font-bold! text-[22px]!"}>{place?.title}</h1>
      <div className={"flex items-center"}>
        <Image src={"/map-pin.svg"} alt={"Localização"} width={18} height={18}/>
        <span className={"text-sm ml-1 text-slate-500"}>{place?.location}</span>
      </div>

      <h2 className={"font-bold! text-[18px]! mt-3"}>Descrição</h2>

      <p className={"text-sm text-slate-500"}>{place?.content}</p>
      <p className={"text-sm text-slate-500"}>{place?.content}</p>
      <p className={"text-sm text-slate-500"}>{place?.content}</p>
      <p className={"text-sm text-slate-500"}>{place?.content}</p>
      <p className={"text-sm text-slate-500"}>{place?.content}</p>
    </div>
  </div>
}
