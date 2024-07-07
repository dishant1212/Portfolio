import { IoPhonePortraitOutline } from "react-icons/io5";
import { SiLibreofficemath } from "react-icons/si";
import { IoMdBook } from "react-icons/io";
import TimelineItem from "../comman/timelineItem";

function Eduction() {
  return (
    <div className="text-white h-full w-full flex justify-center items-center">
      <div className="w-[95%] h-full">
        <div>
          <h1 className="text-3xl font-bold ">Education</h1>
          <h2 className="inline-block w-12 border-2 border-[#ce9824] rounded-md"></h2>
        </div>

        <div className="my-4 text-gray-300 text-md">
        <div className=" px-8">
    
    <TimelineItem 
      title="Bachelor of Science in Computer Science"
      period="2021 — 2024"
      description="Currently pursuing a Bachelor's of Science in Computer Science at Mahatma Jyotiba Phule Rohilkhand University, Bareilly , Dhampur Degree College ."
    />
    <TimelineItem 
      title="HSC"
      period="2021"
      description="Completed my higher secondary education at R R SARASWATI V M I C DHAMPUR BINJOR , achieving a commendable 70%."
    />
    <TimelineItem 
      title="SSC"
      period="2019"
      description="Completed my secondary education at MAA SHANTI BAI S V M HSS JAITRA BIJNOR , achieving a commendable 80%."
    />
  </div>
        </div>

       <div className="mb-6">
         <h1 className="text-xl  font-medium">Certification</h1>
         <div className="flex items-center ml-8 space-x-4 mt-2">
         <div className="w-3 h-3 bg-[#ce9824] rounded-full"></div>
         <p className="text-sm  text-gray-400">MERN full stack,DUCAT The IT Training School,Delhi</p>
         </div>
        
       </div>
       
      </div>
    </div>
  );
}

export default Eduction
