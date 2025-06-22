'use client'
import {usePathname, useRouter} from "next/navigation";
import {logout} from "@/actions/logout";
import clsx from "clsx";

interface IBottomMenuProps {
  className?: string;
}

export function BottomMenu({ className }: IBottomMenuProps) {
  const router = useRouter();
  const path = usePathname();
  console.log(path);

  return <div className={clsx("min-h-[60px] h-[60px] flex items-center justify-around bg-white border-top-[1px] border-slate-300 border-solid z-[100]", className)}>
    <button className={"flex flex-col"} onClick={() => {
      router.push("/home")
    }}>
      <span className={clsx("text-[14px]", path === "/home" ? "text-blue-500" : "text-slate-500")}>Home</span>
    </button>

    <button className={"flex flex-col"} onClick={() => {
      router.push("/local/cadastro")
    }}>
      <span className={clsx("text-[14px]", path === "/local/cadastro" ? "text-blue-500" : "text-slate-500")}>Adicionar</span>
    </button>

    <button className={"flex flex-col"} onClick={() => {
      router.push("/favoritos")
    }}>
      <span className={clsx("text-[14px]", path === "/favoritos" ? "text-blue-500" : "text-slate-500")}>Favoritos</span>
    </button>

    <button className={"flex flex-col"} onClick={() => logout()}>
      <span className={"text-[14px] text-slate-500"}>Logout</span>
    </button>
  </div>
}
