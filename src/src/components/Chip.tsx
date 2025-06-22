import {ReactNode} from "react";
import clsx from "clsx";

interface IChipProps {
  children: ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function Chip({ children, isSelected, onClick }: IChipProps) {
  return <div className={clsx("cursor-pointer border-1 border-slate-300 py-1.5 px-2 w-fit h-fit rounded-full text-[14px] font-[500]", isSelected && "bg-slate-900 text-white")} onClick={onClick}>
    {children}
  </div>
}
