import logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import DropDown from "./DropDown/DropDown";

const Header = () => {
    return (
        <header className="bg-[#EDE7DC]">
            <div className="mx-auto container">
                <div className="flex justify-between items-center py-4">
                    <div className="flex md:flex-1 px-5">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Logo"
                                className="w-full h-12"
                                priority={true}
                            />
                        </Link>
                    </div>
                    <nav>
                        <div className="hidden md:flex md:gap-x-10 lg:gap-x-20 items-center">
                            <Link href="#" className=" text-[#412d1f]">Home</Link>
                            <Link href="#">About</Link>
                            <Link href="#">
                                <DropDown />
                            </Link>
                            <Link href="#">Cart</Link>
                            <Link href="#" className="bg-[#D9A880] px-3 py-2 rounded-md">Book Now</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;