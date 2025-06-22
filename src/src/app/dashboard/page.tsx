'use client'
import Image from "next/image";
import {useEffect, useState} from "react";
import Input from "@/components/Input";
import Chip from "@/components/Chip";
import {EPlaceCategory, IPlace} from "@/@types/place.interface";
import PlaceCard from "@/components/PlaceCard";

export default function Dashboard() {
  const [category, setCategory] = useState(EPlaceCategory.All)
  const [filter, setFilter] = useState('')

  const [places, setPlaces] = useState<IPlace[]>([
    {
      imageUrl: '/praia.jpg',
      category: EPlaceCategory.City,
      content: 'Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos.',
      createdAt: new Date().toISOString(),
      creatorId: 1,
      id: 1,
      location: 'Imbituba, SC',
      title: 'Praia da Rosa',
      updatedAt: new Date().toISOString()
    },
    {
      imageUrl: '/praia.jpg',
      category: EPlaceCategory.City,
      content: 'Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos.',
      createdAt: new Date().toISOString(),
      creatorId: 1,
      id: 1,
      location: 'Imbituba, SC',
      title: 'Praia da Rosa',
      updatedAt: new Date().toISOString()
    },
    {
      imageUrl: '/praia.jpg',
      category: EPlaceCategory.City,
      content: 'Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos. Uma das principais cidades do mundo, conhecida por sua cultura vibrante e pontos turísticos icônicos.',
      createdAt: new Date().toISOString(),
      creatorId: 1,
      id: 1,
      location: 'Imbituba, SC',
      title: 'Praia da Rosa',
      updatedAt: new Date().toISOString()
    }
  ])

  useEffect(() => {
    // DEV
  }, []);

  const onClick = (category: EPlaceCategory) => {
    setCategory(category);
  }

  return <div className={"h-full flex flex-col overflow-hidden"}>
    <div className={"w-full bg-slate-900 p-4"}>
      <div className={"flex items-center"}>
        <Image src={'compass.svg'} alt={'Compass'} width={30} height={30}/>
        <span className={"font-extrabold text-white ml-2"}>Tourist Guide</span>
      </div>

      <Input wrapperClassName={"mt-3"} placeholder={"Buscar lugares, cidades, atrações..."} startContent={<Image src={'search.svg'} alt={'Search'} width={20} height={20}/>} value={filter} onChange={(e) => setFilter(e.target.value)} />
    </div>
    <div className={"shadow-sm p-3 flex gap-2"}>
      <Chip isSelected={category === EPlaceCategory.All} onClick={() => onClick(EPlaceCategory.All)}>Todos</Chip>
      <Chip isSelected={category === EPlaceCategory.Beach} onClick={() => setCategory(EPlaceCategory.Beach)}>Hotéis</Chip>
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
          {places.map(place => <PlaceCard key={place.id} place={place} />)}
        </div>
      </div>
    </div>

  </div>
}
