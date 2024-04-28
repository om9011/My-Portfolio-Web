import { content } from "../Content";
import resumePdf from "../assets/resume.pdf";

const Hero = () => {
  const { hero } = content;

  const handleDownload = () => {
    const anchorElement = document.createElement("a");
    anchorElement.href = resumePdf;
    anchorElement.download = "resume.pdf";
    anchorElement.click();
  };


  return (
    <section id="home" className="overflow-hidden">
      <div className="min-h-screen relative flex flex-col-reverse md:flex-row md:items-end justify-center items-center">
        <div className="absolute inset-0 md:w-4/12 w-full bg-primaryLinear -z-10"></div>
        <h1 className="absolute top-[30px] md:top-20 left-1/2 md:left-1/4 transform -translate-x-1/2 text-5xl md:text-7xl text-[#5696d6] flex items-center">
          {hero.firstName}{" "}
          <span className="text-dark_primary"> {" "}{hero.LastName}</span>
        </h1>

        <div className="min-h-screen flex items-center justify-center mt-16">
          <div className="container grid md:grid-cols-2 gap-10 items-center">
            <div className="pb-16 px-6 pt-5">
              <h2 className="text-center text-3xl md:text-7xl">{hero.title}</h2>
              <br />
              <div className="flex flex-col gap-10 mt-5">
                {hero.hero_content.map((content, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-10 ${
                      i === 1 && "md:flex-row-reverse text-right"
                    }`}
                  >
                    <h3>{content.count}</h3>
                    <p>{content.text}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-10"> {/* Container for social media icons */}
                {hero.social_media.map((social_media, i) => (
                  <div key={i} className="mr-5">
                    <a
                      href={social_media.link}
                      className="rounded-full hover:text-white hover:border-white transition duration-300 ease-in-out text-black border-2 border-gray-300 text-2xl bg-transparent hover:bg-blue-500 text-white px-3 p-2"
                    >
                      <i className={`bx bxl-${social_media.name}`} />
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-center mt-8"> {/* Button container */}
                <button onClick={handleDownload} className="btn hover:bg-blue-500 hover:text-white hover:border-white transition duration-300 ease-in-out">
                  {hero.btnText}
                </button>
              </div>
            </div>

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
