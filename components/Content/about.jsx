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
          Hello! I&apos;m Dishant Chauhan, I'm a passionate Frontend Developer
          with experience building responsive, user-friendly web applications
          using modern JavaScript frameworks like React.js and Next.js. My
          expertise lies in developing scalable, fast, and SEO-optimized
          applications with a keen focus on creating pixel-perfect user
          interfaces and intuitive user experiences. I have experience working
          across the full frontend stack, from component-driven development to
          state management using Redux and handling server-side rendering with
          Next.js. I'm always eager to learn and stay updated with the latest
          trends in frontend technologies, and I love working on projects that
          challenge me to think creatively and solve real-world problems. In
          addition to coding, I enjoy collaborating with cross-functional teams
          and contributing to open-source projects.
        </p>

        <div className="flex">
          <div className="flex space-x-2 items-center justify-center px-2 py-2 border-[1px] border-[#7c7777] ">
            <a
              className="text-[#ead487] text-md"
              href="/dishant-resume.pdf"
              download="dishant-resume"
            >
              Download Resume{" "}
            </a>
            <a
              className="text-[#ead487] text-lg  "
              href="/dishant-resume.pdf"
              download="dishant-resume"
            >
              <FaFileDownload />
            </a>
          </div>
        </div>

        <div className="my-2">
          <h1 className="text-2xl font-bold">Skills</h1>
          <div className="my-4 flex space-x-10">
            <div className="w-[300px] h-auto border-[1px] border-[#605e5e] space-x-1 flex rounded-lg px-4 py-2">
              {/* <div className="h-full px-4 flex justify-center items-center"><SiLibreofficemath  className="text-[#ead487] text-4xl"/></div> */}
              <div>
                <h1 className="text-xl font-medium mt-2 text-[#ead487]">
                  Frontend
                </h1>
                <p>Java Script , React.js , Redux , Next.js , Tailwindcss .</p>
              </div>
            </div>

            <div className="w-[300px] h-auto border-[1px] border-[#605e5e] space-x-1 flex rounded-lg px-4 py-2">
              {/* <div className="h-full px-4 flex justify-center items-center"><SiLibreofficemath  className="text-[#ead487] text-4xl"/></div> */}
              <div>
                <h1 className="text-xl font-medium mt-2 text-[#ead487]">
                  Backend
                </h1>
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
