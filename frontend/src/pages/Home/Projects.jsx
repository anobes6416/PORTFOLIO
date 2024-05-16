import React from 'react'
import SectionTitle from '../../components/SectionTitle';
import { experiences } from "../../resources/experiences";

function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (

            <div >
                <SectionTitle title= "Projects" />
        <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-5 border-l-2 border-[#135e4c82] w-1/3 sm:overflow-flow-scroll sm:w-full sm:flex-row w-n">
          {experiences.map((experience, index) => (
            <div
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5
                ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-2"
                    : "text-white"
                }`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-2xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-tertiary text-2xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            tenetur at eos harum! Veniam voluptatum modi repellendus nobis!
            Rerum inventore, soluta culpa suscipit excepturi reiciendis modi
            accusantium aliquam nisi quas.
          </p>
        </div>
          </div>  
    </div>)
}

export default Projects