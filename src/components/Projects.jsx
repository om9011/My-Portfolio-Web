import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;

  return (
    <section className="flex justify-center items-center pt-10 mb-10" id="projects">
      <div className="container py-4 px-5 flex flex-col justify-center">
        <div>
          <h2 className="text-3xl lg:text-5xl text-center mb-6 lg:mb-10">
            {Projects.title}
          </h2>
        </div>
        <div className="flex justify-center">
          <Swiper
            
            spaceBetween={20}
            modules={[Pagination]}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            className="w-full lg:w-auto py-6 lg:pb-16"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide key={i} className="px-2">
                <div className="bg-white rounded-3xl p-4 lg:p-5 border-2 border-blue-300">
                  <img src={content.image} alt="Project" className="w-full rounded-2xl" />
                  <div className="mt-3">
                    <h5 className="text-base lg:text-lg font-bold">{content.title}</h5>
                    <a href={content.link} className="text-blue-500 flex items-center mt-1">
                      <span className="mr-1">GitHub</span>
                      <i className="bx bx-right-arrow-alt text-lg"></i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Projects;
