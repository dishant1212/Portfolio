import { useState } from "react";
import About from "./about";
import Projects from "./projects";
import Eduction from "./eduction";
import Experience from "./experience";

function Content() {
  const [state, setState] = useState("about");

  const getPage = () => {
    switch (state) {
      case "about":
        return <About />;
        break;
      case "projects":
        return <Projects />;
        break;
      case "eduction":
        return  <Eduction/>;
        break;
      case "experience":
        return <Experience/>;
      default:
        break;
    }
  };

  const navLinkHandler = (data) => {
    setState(data);
  };
  return (
    <div className="h-full w-[90%] md:w-[75%] border-[1px] border-[#7c7777] rounded-lg flex flex-col overflow-auto scrollbar-thin">
      <div className="text-white  w-full flex justify-end items-start relative inset-0 ">
        <nav className="h-16 border-l-[1px] border-b-[1px] border-[#5b5959] rounded-md flex justify-center items-center px-4 absolute z-30 border-2">
          <ul className="flex space-x-2 md:space-x-8 text-sm md:text-lg font-semibold">
            <li
              className="cursor-pointer"
              onClick={() => navLinkHandler("about")}
            >
              About
            </li>
            <li
              className="cursor-pointer"
              onClick={() => navLinkHandler("experience")}
            >
              Experience
            </li>
            <li
              className="cursor-pointer"
              onClick={() => navLinkHandler("projects")}
            >
              Projects
            </li>
            <li
              className="cursor-pointer"
              onClick={() => navLinkHandler("eduction")}
            >
              Education
            </li>
            
          </ul>
        </nav>
      </div>
      <div className=" h-full w-full mt-14">{getPage()}</div>
    </div>
  );
}

export default Content;
