'use client'
import {usePathname, useRouter} from "next/navigation";
import {logout} from "@/actions/logout";
import clsx from "clsx";
import {BookmarkSimple, HouseLine, Plus, SignOut} from "phosphor-react";

interface IBottomMenuProps {
  className?: string;
}

export function BottomMenu({ className }: IBottomMenuProps) {
  const router = useRouter();
  const path = usePathname();
  console.log(path);

  return <div className={clsx("min-h-[60px] h-[60px] flex items-center justify-around bg-white border-top-[1px] border-slate-300 border-solid z-[100]", className)}>
    <button className={"flex flex-col items-center"} onClick={() => {
      router.push("/home")
    }}>
      <HouseLine size={18} className={path === "/home" ? "text-blue-500" : "text-slate-500"} />
      <span className={clsx("text-[12px]", path === "/home" ? "text-blue-500" : "text-slate-500")}>Home</span>
    </button>

    <button className={"flex flex-col items-center"} onClick={() => {
      router.push("/local/cadastro")
    }}>
      <Plus size={18} className={path === "/local/cadastro" ? "text-blue-500" : "text-slate-500"} />
      <span className={clsx("text-[12px]", path === "/local/cadastro" ? "text-blue-500" : "text-slate-500")}>Adicionar</span>
    </button>

    <button className={"flex flex-col items-center"} onClick={() => {
      router.push("/favoritos")
    }}>
      <BookmarkSimple size={18} className={path === "/favoritos" ? "text-blue-500" : "text-slate-500"} />
      <span className={clsx("text-[12px]", path === "/favoritos" ? "text-blue-500" : "text-slate-500")}>Favoritos</span>
    </button>

    <button className={"flex flex-col items-center"} onClick={() => logout()}>
      <SignOut size={18} className={"text-slate-500"} />
      <span className={"text-[12px] text-slate-500"}>Logout</span>
    </button>
  </div>
}
