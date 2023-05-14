'use client'
import { FC, useState } from "react";
import logo from "@/assets/img/logo1.png"
import Image from "next/image";
import Link from "next/link";

interface Props { }

export const Navbar: FC<Props> = () => {
    const [showMenu, setShowMenu] = useState<boolean>(true);

    const handleShowMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <div className="bg-violet-950 flex justify-between lg:justify-start items-center">
            <div className="logo p-2 w-1/6">
                <Image
                    alt='logo'
                    src={logo}
                    priority={false}
                    style={{
                        width: 'auto',
                        height: 'auto',
                        display: 'block',
                        maxWidth: '15vh'
                    }}
                />
            </div>
            <div className="links lg:block hidden w-1/6 md:w-4/6">
                <ul className="menu flex items-center justify-center gap-5">
                    <li><Link href="#" className="link">Home</Link></li>
                    <li><Link href="#" className="link">Men</Link></li>
                    <li><Link href="#" className="link">Women</Link></li>
                    <li><Link href="#" className="border-1 border-yellow-400 text-white font-bold rounded-full  py-2.5 px-4 hover:bg-white hover:text-black transition duration-500">About</Link></li>
                    <li><Link href="#" className="rounded-full bg-blue-800 text-white font-bold px-4 py-3 hover:bg-white hover:text-black transition duration-500">Contact</Link></li>
                </ul>
            </div>

            <div className="block lg:hidden w-1/6 lg:w-4/6">
                <p className="link" onClick={handleShowMenu}>Menu</p>
                {(!showMenu) && (
                    <ul className="movile-links w-full absolute z-50 left-0 text-center bg-gray-800">
                        <li><Link href="#" className="link">Home</Link></li>
                        <li><Link href="#" className="link">Men</Link></li>
                        <li><Link href="#" className="link">Women</Link></li>
                        <li><Link href="#" className="my-4 inline-block border-1 border-yellow-400 text-white font-bold rounded-full p-2 hover:bg-white hover:text-black transition duration-500">About</Link></li>
                        <li><Link href="#" className="my-4 inline-block rounded-full bg-blue-800 text-white font-bold px-4 py-3 hover:bg-white hover:text-black transition duration-500">Contact</Link></li>
                    </ul>
                )}
            </div>
        </div>
    )
}
