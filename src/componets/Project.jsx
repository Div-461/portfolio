import React from "react";
import notetaker from "../assets/portfolio/notetaker.png";
import ecommarce from "../assets/portfolio/ecommarce.jpg";
import whether from "../assets/portfolio/whether.png";
import rps from "../assets/portfolio/rps.png";
import tc from "../assets/portfolio/tc.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: ecommarce,
      name:"E-Commarce",
      href: "https://github.com/Div-461/E-Commarce-Using-ASP.NET-MVC"
    },
    {
      id: 2,
      src: notetaker,
      name:"Note Taker",
      href:"https://github.com/Div-461/NoteTaker"
    },
    {
      id: 3,
      src: whether,
      name:"Advance Whether App",
      href:"https://github.com/Div-461/Advance-Whether-App"
    },
    {
      id: 4,
      src: rps,
      name:"Rock Paper Scissors",
      href:"https://github.com/Div-461/Rock-Paper-Scissors"
    },
    {
      id: 5,
      src: tc,
      name:"Tip Calculator",
      href:"https://github.com/Div-461/Tip-Calculator-Using-JavaScript"
    },
  ];

  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,href,name }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
                height="720px"
                width="1280px"
              />
              <div className="flex items-center justify-center">
                 <a href={href}
                 target="_blank"
                 rel="noreferrer" className="w-1/2 px-6 py-1 m-1 duration-200 hover:scale-105 items-center text-sm">
                 {name}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
     </div>
  );
};

export default Portfolio;
