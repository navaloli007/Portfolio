// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amit Verma",
      rating: 5,
      position: "Project Manager",
      company: "DigitalCraft Solutions",
      text: "Naval played a key role in modernizing our frontend architecture. His expertise in Angular and optimization significantly improved performance across our dashboards.",
    },
    {
      id: 2,
      name: "Riya Sharma",
      rating: 4,
      position: "Senior Product Analyst",
      company: "BrightVision Tech",
      text: "We were impressed with his attention to detail and UI/UX thinking. He transformed complex workflows into clean, user-friendly interfaces.",
    },
    {
      id: 3,
      name: "Karan Patel",
      rating: 5,
      position: "Tech Lead",
      company: "InnoWave Systems",
      text: "Naval delivered every module with exceptional code quality. His ability to manage API integrations and state management under tight deadlines was remarkable.",
    },
    {
      id: 4,
      name: "Sneha Kulkarni",
      rating: 5,
      position: "Engineering Manager",
      company: "NextEra Workspace",
      text: "He quickly understood our domain and built scalable components using Angular, RxJS, and Material. His problem-solving approach is outstanding.",
    },
    {
      id: 5,
      name: "Arjun Mehta",
      rating: 4,
      position: "Director of Technology",
      company: "ZenMatrix Labs",
      text: "Naval brings a perfect balance of technical depth and team collaboration. His frontend and API debugging skills helped reduce issue resolution time by 40%.",
    },
  ];

  return (
    <div id="testimonials" className="py-10 bg-gray-100 relative">
      <h1 className="text-center text-2xl lg:text-4xl font-bold">
        What Clients Say
      </h1>

      <div className="max-w-6xl mx-auto py-10 px-5">
        <Swiper
          style={{
            "--swiper-pagination-color": "#EF4444",
            "--swiper-pagination-bullet-inactive-color": "#999999",
            "--swiper-pagination-bullet-size": "10px",
          }}
          modules={[Pagination, Autoplay]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
          }}
          className="mySwiper"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="border border-gray-300 shadow-md shadow-red-300 bg-white rounded-lg p-5 h-full min-h-[300px] flex flex-col justify-between">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i <= item.rating ? "text-yellow-500" : "text-gray-400"
                      }`}
                      fill={i <= item.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>

                <p className="py-3 text-gray-700">{item.text}</p>

                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-red-500 text-lg">
                      {item.name}
                    </h3>
                    <p className="text-sm mt-1 text-gray-600">
                      {item.position}, {item.company}
                    </p>
                  </div>

                  <Quote className="text-red-400" />
                </div>
              </div>
            </SwiperSlide>
          ))}

          <div className="swiper-pagination mt-8"></div>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
