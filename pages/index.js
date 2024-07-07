import Content from "@/components/Content/content";
import Profile from "@/components/Profile/profile";

export default function Home() {

  

  return (
    <>
    <div className="bg-[#171717] h-auto md:h-screen w-full overflow-auto flex justify-center items-center py-10 md:py-0 ">
        <div className=" h-[90%] w-[95%] flex flex-col justify-center items-center md:flex-row space-y-4 md:space-y-0 md:space-x-4 space-x-0 " >
           
              <Profile/>
           
              <Content/>
          
        </div>
    </div>
    </>
  );
}
