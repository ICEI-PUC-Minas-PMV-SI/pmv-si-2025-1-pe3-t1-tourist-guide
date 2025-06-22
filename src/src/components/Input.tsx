import clsx from "clsx";
import {ChangeEvent, ReactElement} from "react";
import styles from './Input.module.css';

interface IInputProps {
  wrapperClassName?: string;
  className?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  label?: string;
  error?: string;
  startContent?: ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ className, wrapperClassName, startContent, type, placeholder, value, onChange, label, error }: IInputProps) {
  return <div className={clsx("flex flex-col gap-2", wrapperClassName)}>
    {label && <label className={"text-[14px] font-normal font-[#374151]"}>{label}</label>}
    <div className={clsx("rounded-2 outline-transparent border-slate-200 focus-within:outline-slate-500/30 focus-within:border-1 focus-within:border-slate-900 focus-within:outline-3 bg-white border-1", styles.input)}>
      <div className={"flex"}>
        {startContent && <div className={"flex items-center ml-2 -mr-2"}>{startContent}</div>}
        <input type={type} className={clsx(className, "flex-1 outline-none text-[12px]! p-[13px]")} placeholder={placeholder} value={value} onChange={onChange} />
      </div>
    </div>
    {error && <span className={"text-[12px] text-red-400"}>{error}</span>}
  </div>
}
