import Link from "next/link";
import Image from "next/image";
import NavLinks from "./navlinks";

export default function Navbar() {
  return (
    <div className="flex bg-white rounded-b-lg shadow-lg w-full py-3">
      <Link className="flex justify-start pl-10" href="/">
        <div className="pt-2">
          <Image src={"/logo.png"} alt={"XOXO"} width={72} height={16} />
        </div>
      </Link>
      <div className="flex grow flex-row justify-center space-x-8 pr-20">
        <NavLinks />
      </div>
      <div className="flex justify-end pr-10">
        <button>
          <Image src={"/SignOut.png"} alt={"Sign out"} width={18} height={18} />
        </button>
      </div>
    </div>
  );
}
