"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [valueSnackbar, setValueSnackbar] = useState('hidden');
    const botaoDesativado = () => {
        setValueSnackbar('');
        setTimeout(() => {
            setValueSnackbar('hidden');
        }, 3000);
    }
    return (
        <main className="flex min-h-screen flex-col items-center justify-between text-black bg-[#F2EAE2]">
            <div className="flex flex-col md:my-auto md:flex-row rounded-lg my-8 p-4">
                <img src="/img/image-product-desktop.jpg" className="hidden md:flex rounded-l-lg max-w-96" alt="" />
                <img src="/img/image-product-mobile.jpg" className="md:hidden max-w-96 rounded-t-lg" alt="" />
                <div className="flex flex-col p-8 max-w-96 bg-white rounded-b-lg md:rounded-b-none md:rounded-r-lg">
                    <p className="" id="perfume">PERFUME</p>
                    <h1 className="mt-8" id="gabrielle">Gabrielle Essence Eau De Parfum</h1>
                    <p className="mt-8 text-xl" id="description">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
                    <div className="mt-8 mb-8 flex flex-row items-center text-[#3D8168]">
                        <h3 className="" id="gabrielle">$149.99</h3>
                        <del className="ml-3 text-sm">$169.99</del>
                    </div>
                    <button className="bg-[#3D8168] hover:bg-[#1A4032] p-4 flex items-center rounded-lg text-white" onClick={botaoDesativado}>
                        <div className="flex flex-row mx-auto">
                            <img src="/img/icon-cart.svg" alt="" />
                            <p className="ml-2" id="ad-cart">Add to Cart</p>
                        </div>
                    </button>
                </div>
            </div>
            <div className="fixed flex -mt-10 h-full items-end text-white">
                <div className={`${valueSnackbar} bg-[#51ac8a] p-4 rounded-lg`}>Ilustrative Button</div>
            </div>
        </main>
    );
}
