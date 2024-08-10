import Image from "next/image";

export default function Landing(){
    return(
        <div className="h-[88vh] w-[100%] relative">
            <div className="landing h-[100%] ">
            </div>
            <div className="absolute top-36 left-24 z-10 text-white font-roboto tracking-wide">
                <h1 className="text-7xl font-bold">Reliability.</h1>
                <h1 className="text-7xl font-bold">Sustainability.</h1>
                <h1 className="text-7xl font-bold">Ease.</h1>
                <p className="text-lg text-slate-300">EchoInspect : Effortlessly Streamline Vehicle inspections </p>
                <p className="text-lg text-slate-300">with seamless voice recognition</p>
                <button className="landing-button bg-[#ffcc00] rounded-md shadow-lg text-black font-bold px-4 py-1 mt-2 font-sans tracking-normal"><a href="https://www.caterpillar.com/" target="_blank">Know more</a></button>
            </div>
        </div>
    );
}