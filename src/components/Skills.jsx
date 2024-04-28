import { createElement } from "react";
import { content } from "../Content";

const Skills = () => {
  const { skills } = content;

  return (
    <section
      className="min-h-[80vh] py-10 flex justify-center items-center bg-bg_light_primary"
      id="skills"
    >
      {/* content */}
      <div className="container px-5 mx-auto">
        <h2 className="text-3xl lg:text-5xl text-center mb-6 lg:mb-10">{skills.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 ">
          {skills.skills_content.map((skill, i) => (
            <div
              key={i}
              className="bg-white cursor-pointer relative group flex flex-col items-center justify-center gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
            >
              <img
                src={skill.logo}
                alt="Skill Logo"
                className="w-20 group-hover:scale-125 duration-200"
              />
              <h6 className="text-center">{skill.name}</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
