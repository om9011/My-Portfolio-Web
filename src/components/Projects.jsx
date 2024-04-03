import { content } from "../Content";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  return (
    <section className="flex justify-center items-center bg-bg_light_primary pt-10 h-[90vh]" id="projects">
      <div className="md:container px-5 flex flex-col justify-between">
        <div>
          <h2 className="text-5xl text-center mb-10">
            {Projects.title}
          </h2>
          <br />
        </div>
        <div className="flex items-center lg:flex-row ">
          <Swiper
            pagination={{
              clickable: true,
            }}
            spaceBetween={20}
            modules={[Pagination]}
            autoplay={{delay:500}}
            slidesPerView={3}
            className="rounded-3xl pb-16 max-w-8xl drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white w-xl rounded-3xl p-5 border-2 border-blue-300  h-fit"
              >
                <img src={content.image} alt="..." width={2500} className="rounded-2xl drop-shadow-red" />  
                <div className="flex flex-col gap-3 mt-5">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <a href={content.link} className="font-bold text-black-500 flex items-center justify-left">
                    <h6>Github</h6>
                    <i class='bx bx-right-arrow-alt text-3xl'></i>
                  </a>
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
