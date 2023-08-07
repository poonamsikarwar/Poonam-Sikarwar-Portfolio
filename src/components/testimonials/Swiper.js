// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "./testimonial.css";
// import AVTR1 from '../../assets/avatar1.jpg'
import me from "../../assets/me1.png";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        {" "}
        <article className="testimonial">
          <div className="client_avatar">
            <img src={me} alt="Avatar 1 only" />
          </div>
          <h5 className="client_name">Poonam Achiever</h5>
          <small className="client_review">
            Hello, I'm a Computer Science Engineering student who found her
            true passion in programming and development. I knew this is what I
            wanted to do in my life! I love the combination of creative and
            logical problem-solving skills I got to use when writing code. And I
            love how there's always more to learn{" "}
          </small>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR2} alt="Avatar 1 only" />
          </div>
          <h5 className="client_name">Poonam Achiever</h5>
          <small className="client_review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            omnis eius dolore quia saepe iste error! Veritatis nesciunt illum
            alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            maxime.
          </small>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR3} alt="Avatar 1 only" />
          </div>
          <h5 className="client_name">Poonam Achiever</h5>
          <small className="client_review">
            Lapsum dolor sit, amet consectetur adipisicing elit. Autem omnis
            eius dolore quia saepe iste error! Veritatis nesciunt illum alias.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, maxime.
          </small>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <article className="testimonial">
          <div className="client_avatar">
            <img src={AVTR4} alt="Avatar 1 only" />
          </div>
          <h5 className="client_name">Poonam Achiever</h5>
          <small className="client_review">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            omnis eius dolore quia saepe iste error! Veritatis nesciunt illum
            alias. Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
            maxime.
          </small>
        </article>
      </SwiperSlide>
    </Swiper>
  );
};
