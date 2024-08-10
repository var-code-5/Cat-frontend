import Navbar from "../components/Navbar";
import Linechart from "../components/Linechart";
import Image from "next/image";

export default function Home(){
    return(
        <div>
            <Navbar/>
            <h1 className="text-4xl dashboard ml-10 mt-10 mb-10">Tools:</h1>
            <div className="flex justify-evenly items-center text-2xl dashboard">
                <div className="flex flex-col items-center justify-evenly h-[60vh] w-[35vh] bg-gradient-to-b from-[#ffcc00] to-[#ffffff] rounded-xl shadow-xl hover:scale-125 transition-all duration-500">
                    <Image src="/coustomers.png" alt="coustomer's image" width={250} height={250}/>
                    <h2>Customer queries</h2>
                </div>
                <div className="flex flex-col items-center justify-evenly h-[60vh] w-[35vh] bg-gradient-to-b from-[#ffcc00] to-[#ffffff] rounded-xl shadow-xl hover:scale-125 transition-all duration-500 scale-110">
                    <Image src="/Inspect-removebg.png" alt="inspection image" width={200} height={200}/>
                    <h2>Inspect vehicle</h2>
                </div>
                <div className="flex flex-col items-center justify-evenly h-[60vh] w-[35vh] bg-gradient-to-b from-[#ffcc00] to-[#ffffff] rounded-xl shadow-xl hover:scale-125 transition-all duration-500">
                    <Image src="/reports-2.png" alt="report image" width={100} height={100}/>
                    <h2>Previous reports</h2>
                </div>
            </div>
            {/* <Linechart/> */}
        </div>
    );
}