import Image from "next/image";

export default function AppLogo() {
  return <div
    className="w-[200px] h-[200px] rounded-2 bg-[#0f172a] align-self-center flex flex-col items-center justify-center gap-2">
    <Image src={"compass.svg"} alt={"Compass"} width={60} height={60}/>
    <span className={"text-[24px] text-white text-center font-extrabold"}>Tourist <br/>Guide</span>
  </div>
}
