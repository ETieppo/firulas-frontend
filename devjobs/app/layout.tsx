"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [showSnackbar, setShowSnackbar] = useState('');
    const botaoDesativado = () => {
        setShowSnackbar('show');
        setTimeout(() => {
            setShowSnackbar('');
        }, 4000);
    };

    return (
        <html lang="en">
            <body className={inter.className}>
                <header className="flex flex-col w-full">
                    <img id="img-header" className="hidden lg:flex" src="/assets/desktop/bg-pattern-header.svg" alt="" />
                    <img id="img-header" className="hidden md:flex lg:hidden" src="/assets/tablet/bg-pattern-header.svg" alt="" />
                    <img src="/assets/mobile/bg-pattern-header.svg" className="md:hidden" alt="" />
                    <div className="z-50 ml-10 mr-10  md:ml-20 md:mr-20 -mt-[100px] mb-[70px] flex flex-row justify-between min-w-screen ">
                        <Link href={'/'} className="cursor-pointer"><img src="/assets/desktop/logo.svg" alt="" id="area-grow" /></Link>
                        <div className="flex flex-row" id="area-grow">
                            <img className="mr-2" src="/assets/desktop/icon-sun.svg" alt="" />
                            <label className="relative inline-flex mt-1 cursor-pointer">
                                <input type="checkbox" value="" className="sr-only peer" onClick={botaoDesativado}></input>
                                <div className=" w-11 h-6  bg-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#5964E0] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 "></div>
                            </label>
                            <img className="ml-2" src="/assets/desktop/icon-moon.svg" alt="" />
                        </div>
                    </div>
                    <div id="snackbar-color-scheme" className={showSnackbar}>
                        <p className="my-auto mx-auto text-2xl" style={{ color: "#5964E0" }}>Illustrative button, the color scheme is set by default</p>
                    </div>
                </header>
                {children}
            </body>
        </html>
    );
}
