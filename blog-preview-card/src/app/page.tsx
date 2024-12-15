import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-[#F4D04E] text-black">
            <div className="my-auto flex flex-col p-8 -mr-3">
                <div className="flex flex-row-reverse">
                    <div className="bg-black mt-2 -mb-1 p-2 -ml-2 rounded-r-2xl">

                    </div>
                    <div className="bg-white flex flex-col items-center p-4 rounded-xl my-auto z-10">
                        <img src="/img/illustration-article.svg" className=" mt-2 mx-2 mb-4 rounded-lg" alt="" />

                        <div className="max-w-[330px]">
                            <div className="flex flex-row text-md">
                                <p className="bg-[#F4D04E] text-black rounded px-2 p-1">learning</p>
                            </div>
                            <div className="mb-2">
                                <p className=" text-wrap text-[13px] mt-4 mb-4">Published 21 Dec 2023</p>
                                <button className="hover:text-[#F4D04E] cursor-pointer text-[22px] font-bold">HTML & CSS Foundations</button>
                                <div className="flex flex-row justify-between items-center text-[14px] mt-2">
                                    <p>these languages are the backbone of every website, defining estructure, content and presentation.</p>
                                </div>
                            </div>

                            <div className="flex flex-row mt-4 mb-3">
                                <img src="/img/image-avatar.webp" className="w-8 h-8 rounded-full" alt="" />
                                <div className="flex text-[14px] items-center ml-3">
                                    <p>Greg Hopper</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-black ml-2 -mt-2 p-2 z-0 rounded-b-2xl">
                </div>
            </div>
        </main>
    );
}
