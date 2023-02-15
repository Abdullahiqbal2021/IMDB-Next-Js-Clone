import MenuItems from "./MenuItems";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
export default function Header() {
  return (
    <div className="flex flex-wrap justify-between items-center max-w-6xl mx-2 sm:mx-auto py-5">
      <div className="flex ">
        <MenuItems title={"Home"} address="/" Icon={AiFillHome} />
        <MenuItems title={"About"} address="/about" Icon={AiFillInfoCircle} />
      </div>
      <div className="flex items-center space-x-5 ">
        <DarkModeSwitch/>
        <Link href='/'>
            <h2 className="text-2xl"><span className="font-bold bg-amber-600 mr-1 px-2 py-1 rounded-lg" >IMDb</span><span className="text-xl hidden sm:inline">Clone</span></h2>
        </Link>
      </div>
    </div>
  );
}
