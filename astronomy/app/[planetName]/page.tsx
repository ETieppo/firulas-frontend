"use client"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { data } from "../data";

export default function Overview() {
    var path = usePathname();
    var planetName = path.slice(1);


    const planetData = data.find(planet => planet.name.toLowerCase() == planetName);
    var srcImageTratado = planetData?.images.geology.slice(1);
    var srcImageTratadoPlanet = planetData?.images.planet.slice(1);


    var [cor_botoes, setColor] = useState("");
    useEffect(() => {
        switch (planetName) {
            case "mercury":
                setColor("#419EBB");
                break;
            case "venus":
                setColor("#EDA249");
                break;
            case "earth":
                setColor("#6D2ED5");
                break;
            case "mars":
                setColor("#D14C32");
                break;
            case "jupiter":
                setColor("#D83A34");
                break;
            case "saturn":
                setColor("#CD5120");
                break;
            case "uranus":
                setColor("#1EC1A2");
                break;
            case "neptune":
                setColor("#2D68F0");
                break;
            default:
                setColor("#fff")
                break;
        }
    }, [planetName]);

    return(
        <div className="">
            <div className="border"></div>
            <div className="flex flex-row lg:hidden justify-around">
                <Link id="linkHover" href={`/${planetName}/`} className="flex flex-col p-4">
                    <h3 className="">OVERVIEW</h3>
                </Link>
                <Link id="linkHover" href={`/${planetName}/internal`} className="p-4">
                    <h3>STRUCTURE</h3>
                </Link>
                <Link id="linkHover" href={`/${planetName}/geology`} className="p-4">
                    <h3>SURFACE</h3>
                </Link>
            </div>
            <div className="flex flex-row justify-between lg:hidden">
                <div className="border-b-4 w-full" style={{ borderColor: cor_botoes}}></div>
                <div className="w-full"></div>
                <div className="w-full "></div>
            </div>
            <div className="lg:hidden border"></div>
            
            <div className="flex flex-col mt-20 m-10 h-screen lg:mt-0 lg:ml-20 lg:mr-14">
                <div className="flex flex-col m-1 lg:m-14 lg:flex-row justify-between lg:mr-16">
                    <div className="mx-auto my-auto w-6/12 mb-16 lg:w-4/12">
                        <img className="mx-auto" src={srcImageTratadoPlanet} alt="" />
                    </div>
                    <div className="lg:w-96">
                        <div className="mb-8 xl:mb-8 2xl:mb-20">
                            <h1 className="text-6xl text-center lg:text-start lg:text-7xl">{planetData?.name}</h1>
                        </div>
                        <div className="mb-4">
                            <h4 className="text-center lg:text-left">{planetData?.overview.content}</h4>
                        </div>
                        <div className="flex flex-row mb-8 xl:mb-6 2xl:mb-20">
                            <Link className="flex flex-row mx-auto lg:mx-0" href={planetData?.overview?.source ?? 'defaultSource'} id="wikipedia"><h4 id="source">Source: Wikipedia </h4><img className="ml-3" src="../assets/icon-source.svg" alt="" /></Link>
                        </div>
                        <div className="hidden lg:flex flex-col">
                            <Link id="" href={`/${planetName}/`} className="flex flex-row p-3 w-96 mb-5 2xl:mb-8" style={{ backgroundColor: cor_botoes }}>
                                <h3 className="mr-6" style={{ color: "#fff", opacity: "0.5" }}>01</h3>
                                <h3 className="">OVERVIEW</h3>
                            </Link>
                            <Link id="linkHover" href={`/${planetName}/internal`} className="flex flex-row border border-[#d8d8d833] p-3 w-96 mb-5 2xl:mb-8">
                                <h3 className="mr-6" style={{ color: "#fff", opacity: "0.5" }}>02</h3>
                                <h3>INTERNAL STRUCTURE</h3>
                            </Link>
                            <Link id="linkHover" href={`/${planetName}/geology`} className="flex flex-row border border-[#d8d8d833] p-3 w-96 mb-4 2xl:mb-8">
                                <h3 className="mr-6 gray-700" style={{ color: "#fff", opacity: "0.5" }}>03</h3>
                                <h3>SURFACE GEOLOGY</h3>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row lg:mr-16 lg:ml-16">
                    <div id="bordaOpaca" className="flex flex-row justify-between lg:flex-col border p-3 w-full mr-6 mb-4">
                        <p className="my-auto">ROTATION TIME</p>
                        <h1 className="text-4xl">{planetData?.rotation}</h1>
                    </div>
                    <div id="bordaOpaca" className="flex flex-row justify-between lg:flex-col border p-3 w-full mr-6 mb-4">
                        <p className="my-auto">REVOLUTION TIME</p>
                        <h1 className="text-4xl">{planetData?.revolution}</h1>
                    </div>
                    <div id="bordaOpaca" className="flex flex-row justify-between lg:flex-col border p-3 w-full mr-6 mb-4">
                        <p className="my-auto">RADIUS</p>
                        <h1 className="text-4xl">{planetData?.radius}</h1>
                    </div>
                    <div id="bordaOpaca" className="flex flex-row justify-between lg:flex-col border p-3 w-full mb-4">
                        <p className="my-auto">AVERAGE TEMP.</p>
                        <h1 className="text-4xl">{planetData?.temperature}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}
