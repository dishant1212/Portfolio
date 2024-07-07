import { FaFileDownload } from "react-icons/fa";
import { SiLibreofficemath } from "react-icons/si";

function About() {
  return (
    <div className="text-white h-full w-full flex justify-center items-center">
      <div className="w-[95%] h-full">
        <div>
          <h1 className="text-3xl font-bold my-2">About me</h1>
          <h2 className="inline-block w-12 border-2 border-[#ce9824] rounded-md"></h2>
        </div>

        <p className="my-4 text-gray-300 text-md text-justify">
          Hello! I&apos;m Dishant Chauhan, a passionate Full Stack MERN Developer
          with a knack for creating dynamic and responsive web applications. My
          journey in web development has been an exciting one, filled with
          constant learning and adapting to new technologies. I specialize in
          using React.js for building interactive and user-friendly interfaces,
          and I&apos;m well-versed in backend development with Node.js, Express.js,
          and MongoDB. I thrive on solving complex problems and creating
          innovative solutions that make a difference. In my spare time, I enjoy
          exploring new tech trends, contributing to open-source projects, and
          working on personal projects that challenge my skills. I believe in
          continuous learning and strive to keep my knowledge up-to-date to stay
          ahead in the ever-evolving field of technology. Feel free to browse
          through my projects, check out my resume, or get in touch!
        </p>


        <div className="flex">
          <div className="flex space-x-2 items-center justify-center px-2 py-2 border-[1px] border-[#7c7777] ">
          <a className="text-[#ead487] text-md" href="/dishant-resume.pdf" download="dishant-resume" >Download Resume </a>
          <a className="text-[#ead487] text-lg  " href="/dishant-resume.pdf" download="dishant-resume" ><FaFileDownload /></a>
          </div>
        </div>

        <div className="my-2">
            <h1 className="text-2xl font-bold">Skills</h1>
            <div className="my-4 flex space-x-10"> 
                <div className="w-[300px] h-auto border-[1px] border-[#605e5e] space-x-1 flex rounded-lg px-4 py-2">
                {/* <div className="h-full px-4 flex justify-center items-center"><SiLibreofficemath  className="text-[#ead487] text-4xl"/></div> */}
                <div>
                    <h1 className="text-xl font-medium mt-2 text-[#ead487]">Frontend</h1>
                    <p>Java Script , React.js , Redux , Next.js , Tailwindcss .</p>
                </div>
                </div>

                <div className="w-[300px] h-auto border-[1px] border-[#605e5e] space-x-1 flex rounded-lg px-4 py-2">
                {/* <div className="h-full px-4 flex justify-center items-center"><SiLibreofficemath  className="text-[#ead487] text-4xl"/></div> */}
                <div>
                    <h1 className="text-xl font-medium mt-2 text-[#ead487]">Backend</h1>
                    <p>Node.js , Express.js , MongoDB .</p>
                </div>
                </div>
                
            </div>
            
           
        </div>
      </div>
    </div>
  );
}

export default About;
