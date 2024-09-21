import ottMovies from "../../public/ottMovies.png"
import CarRental from "../../public/carRental.png"
import alxtrip from "../../public/alxtrip.png"
import shopSwiftly from "../../public/shopSwiftly.png"
import billStm from "../../public/billmanagementStm.png"
import { FaCode } from "react-icons/fa";

import Image from "next/image";
import { SiLibreofficemath } from "react-icons/si";
import Link from "next/link";

function Projects() {
  return (
    <div className="text-white h-full w-full flex justify-center items-center">
      <div className="w-[95%] h-full">
        <div>
          <h1 className="text-3xl font-bold my-2">Projects</h1>
          <h2 className="inline-block w-12 border-2 border-[#ce9824] rounded-md"></h2>
        </div>

        <div className="my-4 text-gray-300 text-md flex items-center justify-start space-x-0 md:space-x-2 flex-wrap">
            <Link href="https://ottmovies.online/" className=" h-[350px] w-[360px] flex flex-col">
                <div className="h-[80%] w-full  rounded-xl p-2 bg-white">
                    <div className="h-full w-full relative ">
                    <Image  src={ottMovies} layout="fill" />
                </div> 
                </div>
               
                <div className="h-[50%]">
                     <h1 className="mt-2 font-semibold text-lg">OttMovies News WebSite</h1>
                     <h2 className="text-gray-500">Frontend</h2>
                     <div className="text-blue-700">
                        <span>Stack:</span>
                        <span>React.js , Next.js , TailwindCSS</span>
                     </div>
                </div>
            </Link>

            <Link href="https://car-rental.alxtrip.online/" className=" h-[350px] w-[360px] flex flex-col">
                <div className="h-[80%] w-full  rounded-xl p-2 bg-white">
                    <div className="h-full w-full relative ">
                    <Image  src={CarRental} layout="fill" />
                </div> 
                </div>
               
                <div className="h-[50%]">
                     <h1 className="mt-2 font-semibold text-lg">Car-Rental WebSite</h1>
                     <h2 className="text-gray-500">Frontend</h2>
                     <div className="text-green-500">
                        <span>Stack:</span>
                        <span>React.js , Next.js , TailwindCSS</span>
                     </div>
                </div>

                
            </Link>


            <Link href="https://alxtrip.online/" className=" h-[350px] w-[360px] flex flex-col">
                <div className="h-[80%] w-full  rounded-xl p-2 bg-white">
                    <div className="h-full w-full relative ">
                    <Image  src={alxtrip} layout="fill" />
                </div> 
                </div>
               
                <div className="h-[50%]">
                     <h1 className="mt-2 font-semibold text-lg">Alx-Trip Tour WebSite</h1>
                     <h2 className="text-gray-500">Frontend</h2>
                     <div className="text-orange-500">
                        <span>Stack:</span>
                        <span>React.js , Next.js , TailwindCSS</span>
                     </div>
                </div>

                
            </Link>


        </div>

       <div >
             <h2 className="text-2xl font-bold">Personal Projects</h2>
       <div className="my-8 text-gray-300 text-md flex items-center justify-start space-y-4 md:space-y-0 space-x-0 md:space-x-2 flex-wrap">

       <Link href="https://alxtrip.online/" className=" h-[350px] w-[360px] flex flex-col">
                <div className="h-[80%] w-full  rounded-xl p-2 bg-white">
                    <div className="h-full w-full relative ">
                    <Image  src={shopSwiftly} layout="fill" />
                </div> 
                </div>
               
                <div className="h-[50%]">
                     <h1 className="mt-2 font-semibold text-lg">Shop-Swiftly E-commerce WebSite</h1>
                     <h2 className="text-gray-500">Frontend, Backend</h2>
                     <div className="text-orange-700">
                        <span>Stack:</span>
                        <span>React.js, Redux , Node.js , Express.js , MongoDB</span>
                     </div>
                     <div className="flex space-x-2 items-center">
                     <FaCode /> 
                     <a className="text-sm" href="https://github.com/dishant1212/E-commerce-website" target="_main">Git Repositories</a>
                     </div>
                </div>

                
            </Link>

            <Link href="https://alxtrip.online/" className=" h-[350px] w-[360px] flex flex-col">
                <div className="h-[80%] w-full  rounded-xl p-2 bg-white">
                    <div className="h-full w-full relative ">
                    <Image  src={billStm} layout="fill" />
                </div> 
                </div>
               
                <div className="h-[50%]">
                     <h1 className="mt-2 font-semibold text-lg">Bill Management System</h1>
                     <h2 className="text-gray-500">Frontend</h2>
                     <div className="text-orange-700">
                        <span>Stack:</span>
                        <span>React.js , Redux</span>
                     </div>
                     <div className="flex space-x-2 items-center">
                     <FaCode /> 
                     <a className="text-sm" href="https://github.com/dishant1212/BillManagmentSystem" target="_main">Git Repositories</a>
                     </div>
                </div>

                
            </Link>
       </div>
       </div>
            
  
      </div>
    </div>
  );
}

export default Projects;
