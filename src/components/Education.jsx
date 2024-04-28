import { content } from "../Content";

const Education = () => {
  const { education } = content;

  return (
    <section className="bg-bg_light_primary" id="education">
      <div className="container px-4 md:px-5 py-10 md:pt-14">
        <h2 className="text-3xl lg:text-5xl text-center mb-6 lg:mb-10">
          {education.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {education.education_content.map((content, i) => (
            <div
              key={i}
              className="bg-bg_light_primary p-4 md:p-8 rounded-2xl flex flex-col md:flex-row items-center gap-4 md:gap-6 border-2 border-slate-200"
            >
              <img src={content.img} alt="College Logo" className="h-16 md:h-24 w-auto" />
              <div className="text-center md:text-left flex-grow">
                <p className="text-sm md:text-base text-center md:text-left mb-1 md:mb-2">{content.college}</p>
                <h6 className="text-base font-semibold text-center md:text-left mb-1">{content.name}</h6>
                <div className="flex justify-center items-center gap-4 text-center md:text-left">
                  <p className="text-sm font-bold text-gray-500">Percentage:</p>
                  <p className="text-lg font-bold">{content.percentage}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
