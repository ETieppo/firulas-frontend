"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const path = usePathname();
    var pathParts = path.split('/');
    var planetName = pathParts[1];

    const [activePlanet, setActivePlanet] = useState("");

    
    useEffect(() => {
        setActivePlanet(planetName);
    }, [planetName]);

    const getPlanetClass = (planet: string) => {
        return planet === activePlanet ? `${planet} active` : planet;
    };

    const [valorMenu, setValorMenu] = useState('hidden');
    const [valorNome, setValorNome] = useState('flex');

    function mostraMenu() {
        setValorMenu(valorMenu === 'hidden' ? 'flex' : 'hidden');
        setValorNome(valorNome === 'hidden' ? 'flex' : 'hidden');
    }

    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="hidden lg:flex flex-row justify-between mx-10 align-baseline">
                    <Link href="/mercury"><h2 className="text-4xl m-4">THE PLANETS</h2></Link>
                    <div className="flex flex-row items-center h-full jus">
                        <div className="m-10"></div>
                        <div className={`p-6 h-full border-t-2 border-hidden ${getPlanetClass(planetName)}`}><Link className="" href={"/mercury"}><h5 className={getPlanetClass(planetName)}>MERCURY</h5></Link></div>
                        <div className={`p-6 h-full border-t-2 border-hidden ${getPlanetClass(planetName)}`}><Link className="" href={"/venus"}><h5 className={getPlanetClass(planetName)}>VENUS</h5></Link></div>
                        <div className={`p-6 h-full border-t-2 border-hidden ${getPlanetClass(planetName)}`}><Link className="" href={"/earth"}><h5 className={getPlanetClass(planetName)}>EARTH</h5></Link></div>
                        <div className={`p-6 h-full border-t-2 border-hidden ${getPlanetClass(planetName)}`}><Link className="" href={"/mars"}><h5 className={getPlanetClass(planetName)}>MARS</h5></Link></div>
                        <div className={`p-6 h-full border-t-2 border-hidden ${getPlanetClass(planetName)}`}><Link className="" href={"/jupiter"}><h5 className={getPlanetClass(planetName)}>JUPITER</h5></Link></div>
                        <div className={`p-6 h-full border-t-2 border-hidden ${getPlanetClass(planetName)}`}><Link className="" href={"/saturn"}><h5 className={getPlanetClass(planetName)}>SATURN</h5></Link></div>
                        <div className={`p-6 h-full border-t-2 border-hidden ${getPlanetClass(planetName)}`}><Link className="" href={"/uranus"}><h5 className={getPlanetClass(planetName)}>URANUS</h5></Link></div>
                        <div className={`p-6 h-full border-t-2 border-hidden ${getPlanetClass(planetName)}`}><Link className="" href={"/neptune"}><h5 className={getPlanetClass(planetName)}>NEPTUNE</h5></Link></div>
                    </div>
                </div>


                <div className="flex flex-row justify-between lg:hidden">
                    <Link className={` ml-3`} href="/mercury"><h2 className="text-4xl m-4">THE PLANETS</h2></Link>
                    <button className="ml-6" onClick={mostraMenu}><img className="mr-4" src="assets/icon-hamburger.svg" alt="" /></button>
                </div>
                <div className={`${valorMenu} lg:hidden flex-col`}>
                    <Link onClick={mostraMenu} href={"/mercury"}><div className={`p-6 h-full border-t-2 border-hidden flex flex-row ${getPlanetClass(planetName)}`}><div className="p-3 rounded-full" style={{backgroundColor:"#419EBB"}}></div><h5 className={`ml-6 ${getPlanetClass(planetName)}`}>MERCURY</h5></div></Link>
                    <Link onClick={mostraMenu} href={"/venus"}><div className={`p-6 h-full border-t-2 border-hidden flex flex-row ${getPlanetClass(planetName)}`}><div className="p-3 rounded-full" style={{backgroundColor:"#EDA249"}}></div><h5 className={`ml-6 ${getPlanetClass(planetName)}`}>VENUS</h5></div></Link>
                    <Link onClick={mostraMenu} href={"/earth"}><div className={`p-6 h-full border-t-2 border-hidden flex flex-row ${getPlanetClass(planetName)}`}><div className="p-3 rounded-full" style={{backgroundColor:"#6D2ED5"}}></div><h5 className={`ml-6 ${getPlanetClass(planetName)}`}>EARTH</h5></div></Link>
                    <Link onClick={mostraMenu} href={"/mars"}><div className={`p-6 h-full border-t-2 border-hidden flex flex-row ${getPlanetClass(planetName)}`}><div className="p-3 rounded-full" style={{backgroundColor:"#D14C32"}}></div><h5 className={`ml-6 ${getPlanetClass(planetName)}`}>MARS</h5></div></Link>
                    <Link onClick={mostraMenu} href={"/jupiter"}><div className={`p-6 h-full border-t-2 border-hidden flex flex-row ${getPlanetClass(planetName)}`}><div className="p-3 rounded-full" style={{backgroundColor:"#D83A34"}}></div><h5 className={`ml-6 ${getPlanetClass(planetName)}`}>JUPITER</h5></div></Link>
                    <Link onClick={mostraMenu} href={"/saturn"}><div className={`p-6 h-full border-t-2 border-hidden flex flex-row ${getPlanetClass(planetName)}`}><div className="p-3 rounded-full" style={{backgroundColor:"#CD5120"}}></div><h5 className={`ml-6 ${getPlanetClass(planetName)}`}>SATURN</h5></div></Link>
                    <Link onClick={mostraMenu} href={"/uranus"}><div className={`p-6 h-full border-t-2 border-hidden flex flex-row ${getPlanetClass(planetName)}`}><div className="p-3 rounded-full" style={{backgroundColor:"#1EC1A2"}}></div><h5 className={`ml-6 ${getPlanetClass(planetName)}`}>URANUS</h5></div></Link>
                    <Link onClick={mostraMenu} href={"/neptune"}><div className={`p-6 h-full border-t-2 border-hidden flex flex-row ${getPlanetClass(planetName)}`}><div className="p-3 rounded-full" style={{backgroundColor:"#2D68F0"}}></div><h5 className={`ml-6 ${getPlanetClass(planetName)}`}>NEPTUNE</h5></div></Link>
                </div>
                {children}
            </body>
        </html>
    );
}
