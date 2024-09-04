import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

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
                            />
                        </Link>
                    </div>
                    <nav>
                        <div className="hidden md:flex md:gap-x-10 lg:gap-x-20 items-center">
                            <Link href="#" className=" text-[#412d1f]">Home</Link>
                            <Link href="#">About</Link>
                            <Link href="#" className="flex items-center space-x-1">
                                <span>Services</span>
                                <span className="h-3 w-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                                    </svg>
                                </span>
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