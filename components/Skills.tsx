import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { testimonials } from "@/data";
import {companies} from "@/data"


const Skills = () => {
  return (
    <div id="technologies" className="py-20">
      <h1 className="heading">
        My Skills & <span className="text-purple">Expertise</span>
      </h1>
      <div className="flex flex-col items-center justify-center font-bold">
        
      <div className="flex flex-wrap items-center justify-center gap-4 pt-28 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.name}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.url}
                  alt={company.name}
                  className="md:w-10 w-5"
                />
                {/* <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="md:w-24 w-20"
                /> */}
                <div className="flex justify-center items-center">
                  <p className="md:text-lg text-sm">{company.name}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="fast"
          />
        </div>
       
      </div>
    </div>
  );
};

export default Skills;
