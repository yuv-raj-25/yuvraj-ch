import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { testimonials } from "@/data";
import {companies} from "@/data"
import { skills } from "@/data";


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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-28 ">
          {skills.map((skill, index) => {
            // const Icon = skill.icon;
            return (
              <div key={index} className="bg-gray-900 rounded-xl p-8 transform hover:scale-105 transition-all duration-300 shadow-xl">
                <div className="flex items-center mb-8">
                  <div className="p-3 bg-purple bg-opacity-20 rounded-lg mr-4">
                    {/* <Icon className="h-8 w-8 text-purple-500" /> */}
                  </div>
                  <h3 className="text-xl font-semibold text-white">
                    {skill.category}
                  </h3>
                </div>

                <div className="space-y-6">
                  {skill.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{item.name}</span>
                        <span className="text-purple-400">{item.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-purple rounded-full h-2 transition-all duration-500"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
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
