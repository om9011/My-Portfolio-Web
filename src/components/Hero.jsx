// import content
import { content } from "../Content";
const Hero = () => {
  const { hero } = content;

  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex md:flex-row flex-col-reverse md:items-end justify-center items-center">
        <div
          className="absolute h-full md:w-4/12 w-8/12 top-0 right-0 bg-primaryLinear bottom-0 -z-10"
        >
          <h1 className="text-7xl absolute top-[20%] left-[-148%] text-[#5696d6]">
            {hero.firstName}{" "}
            <span className="text-dark_primary">{hero.LastName}</span>
          </h1>
        </div>

        {/* first col */}
        
        <div className="min-h-screen flex items-center justify-center mt-10">
          <div className="container grid md:grid-cols-2 gap-10 items-center">
            {/* First column */}
            <div className="pb-16 px-6 pt-5" data-aos="fade-down">
              <h2>{hero.title}</h2>
              <br />
              <div className="flex flex-col gap-10 mt-5">
                {hero.hero_content.map((content, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-10
                  ${i === 1 && "flex-row-reverse text-right"}  `}
                  >
                    <h3>{content.count}</h3>
                    <p>{content.text}</p>
                  </div>
                ))}
              </div>
              
              <div className="flex gap-2 mt-10">
              <div className="flex justify-center -mt-1 mr-10">
                <button className="btn hover:bg-blue-500 hover:text-white hover:border-white transition duration-300 ease-in-out">{hero.btnText}</button>
              </div>
              {hero.social_media.map((social_media, i) => (
                <div key={i} className=" mr-5">
                  <a
                    href={social_media.link}
                    className="rounded-full hover:text-white hover:border-white transition duration-300 ease-in-out text-black border-2  border-gray-300 text-2xl bg-transparent hover:bg-blue-500 text-white px-3 p-2"
                  >
                    <i className={`bx bxl-${social_media.name}`} />
                  </a>
                </div>
              ))}
              </div>
              
            </div>

            {/* Second column */}
            <div className="md:h-[37rem] h-96">
              <img
                src={hero.image}
                data-aos="slide-up"
                alt="..."
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
