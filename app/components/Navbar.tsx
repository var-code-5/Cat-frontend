import Image from "next/image";

export default function Navbar(){
    return(
        <div className="shadow-lg">
            <div className="flex justify-between p-5 bg-red-50 px-9 h-[10vh] items-center">
            <Image src="/cat-logo.svg" alt="Cat logo" width={200} height={200}/>
            <div>
                <ul className="flex gap-5 pr-5">
                    <li><a href="https://www.caterpillar.com/ " className="text-lg font-semibold underline" target="_blank" >About Us</a></li>
                    <li><a href="#" className="text-lg font-semibold underline">Login</a></li>
                </ul>
            </div>
        </div>
        <div className="h-[2vh] bg-gradient-to-r from-[#ffcc00] to-[#997a00]">

        </div>
        </div>
    );
}