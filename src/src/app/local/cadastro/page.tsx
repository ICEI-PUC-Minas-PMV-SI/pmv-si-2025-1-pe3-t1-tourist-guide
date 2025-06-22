'use client'
import Input from "@/components/Input";
import {Button} from "react-bootstrap";
import {ChangeEvent, useRef, useState} from "react";
import {Image, Buildings, Camera, CaretLeft, Lifebuoy, Volleyball, Clock, DotsThree} from "phosphor-react";
import {EPlaceCategory, ICreatePlaceDto, readablePlaceCategories} from "@/@types/place.interface";
import clsx from "clsx";
import {BottomMenu} from "@/components/BottomMenu";
import {createPlace} from "@/actions/create-place";
import {useRouter} from "next/navigation";
import toast from "react-hot-toast";
import {json} from "node:stream/consumers";

const getCategoryIcon = (category: EPlaceCategory) => {
  switch (category) {
    case EPlaceCategory.Beach:
      return Lifebuoy ;
    case EPlaceCategory.Mountain:
      return Image ;
    case EPlaceCategory.City:
      return Buildings ;
    case EPlaceCategory.Park:
      return Volleyball ;
    case EPlaceCategory.Historical:
      return Clock;
    case EPlaceCategory.Other:
      return DotsThree
    default:
      return DotsThree
  }
}

interface ICategoryCardProps {
  category: EPlaceCategory;
  isSelected?: boolean;
  onClick?: (category: EPlaceCategory) => void;
}

function CategoryCard({ category, isSelected, onClick}: ICategoryCardProps) {
  const Icon = getCategoryIcon(category);

  return <div className={clsx(isSelected && "border-slate-900 bg-slate-200", "cursor-pointer flex-basis-[200px] border-1 border-slate-200 rounded-2 flex-1 flex flex-col items-center gap-2 p-4")} onClick={() => onClick?.(category)}>
    <Icon className={"text-slate-900"} size={24}/>
    <span className={"text-slate-900 font-bold text-[14px]"}>{readablePlaceCategories[category]}</span>
  </div>
}

export default function LocalRegister() {
  const router = useRouter();
  const fileInput = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState(EPlaceCategory.Beach)
  const [description, setDescription] = useState('')
  const [files, setFiles] = useState<File[]>([])

  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    // e.target.files is FileList | null
    if (e.target.files && e.target.files[0]) {
      setFiles(files => {
        return [...files, e.target.files![0]]
      });
    }
  };

  const onClickFileInput = () => {
    fileInput.current?.click();
  }

  const removeImage = (index: number) => {
    setFiles(files => {
      return files.filter((_, i) => i !== index);
    });
  }

  const goBack = () => {
    router.back();
  }

  const submit = async () => {
    const fileUrls = [];
    for (const file of files) {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('/api/upload-file', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        fileUrls.push(result.imageUrl);
      } else {
        toast.error('Erro ao enviar arquivo');
        return;
      }
    }

    const placeData: ICreatePlaceDto = {
      title: name,
      location,
      category,
      content: description,
      imageUrls: fileUrls,
    };

    await createPlace(placeData);
  }

  return <div className={"flex flex-col h-full overflow-y-auto"}>
    <div className={"bg-slate-900 flex items-center p-3"}>
      <CaretLeft color={"white"} weight={"bold"} className={"cursor-pointer"} onClick={goBack}/>
      <span className={"text-white font-extrabold ml-2"}>Cadastrar Novo Local</span>
    </div>
    <div className={"p-4 bg-slate-50 h-full"}>
      <div className={"m-6 shadow-sm bg-white rounded-lg p-3 flex flex-col"}>
        <span className={"font-bold text-slate-800 mb-3"}>Informações Básicas</span>

        <span className={"text-[14px] font-normal font-[#374151]"}>Fotos do Local</span>
        <div className={"flex flex-wrap gap-2"}>
          <div
            className={"cursor-pointer rounded-md border-1 border-slate-200 flex flex-col items-center justify-center w-[200px] h-[150px] p-4"}
            onClick={onClickFileInput}>
            <Camera size={24} className={"text-gray-400 mr-2"}/>
            <span className={"text-gray-500 text-[12px] text-center"}>Clique para adicionar uma foto</span>
          </div>
          {files.map((file, index) => <img src={URL.createObjectURL(file)} alt={"Preview"}
                                  className={"w-[200px] h-[150px] object-cover rounded-md cursor-pointer"} onClick={() => removeImage(index)}/>)}
        </div>
        <input type={"file"} accept={"image/*"} className={"hidden"} ref={fileInput} onChange={handleChange}/>

        <Input label={"Nome do local"} wrapperClassName={"mt-3"} value={name}
               onChange={(e) => setName(e.target.value)}/>
        <Input label={"Localização"} wrapperClassName={"mt-3"} value={location} onChange={e => setLocation(e.target.value)}/>
        <span className={"text-[14px] font-normal font-[#374151] mt-3 mb-1"}>Categoria</span>
        <div className={"flex gap-2"}>
          <CategoryCard category={EPlaceCategory.Beach} isSelected={category === EPlaceCategory.Beach} onClick={setCategory}/>
          <CategoryCard category={EPlaceCategory.Mountain} isSelected={category === EPlaceCategory.Mountain} onClick={setCategory}/>
          <CategoryCard category={EPlaceCategory.City} isSelected={category === EPlaceCategory.City} onClick={setCategory}/>
        </div>
        <div className={"flex gap-2 mt-2"}>
          <CategoryCard category={EPlaceCategory.Park} isSelected={category === EPlaceCategory.Park} onClick={setCategory}/>
          <CategoryCard category={EPlaceCategory.Historical} isSelected={category === EPlaceCategory.Historical} onClick={setCategory}/>
          <CategoryCard category={EPlaceCategory.Other} isSelected={category === EPlaceCategory.Other} onClick={setCategory}/>
        </div>

        <Input label={"Descrição"} textArea wrapperClassName={"mt-3"}
               placeholder={"Descreva o local, suas características e atrações..."} value={description} onChange={e => setDescription(e.target.value)}/>

        <Button variant={"dark"} className={"mt-4"} onClick={submit}>
          Adicionar
        </Button>
      </div>
    </div>

    <BottomMenu className={"sticky bottom-0"}/>
  </div>
}
