import styles from "./Model.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Model = (props) => {
  return (
    <div className={styles.modelWrapper}>
      <div className={styles.modelContainer}>
        <div className={styles.modelImg}>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            className={styles.swiper}>
            <SwiperSlide
              className={styles.swiperSlide}
              style={{
                backgroundImage: `url(${props.img.img1})`,
              }}></SwiperSlide>
            <SwiperSlide
              className={styles.swiperSlide}
              style={{
                backgroundImage: `url(${props.img.img2})`,
              }}></SwiperSlide>
            <SwiperSlide
              className={styles.swiperSlide}
              style={{
                backgroundImage: `url(${props.img.img3})`,
              }}></SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.modelText}>
          <h3>{props.data.name}</h3>
          <p className={styles.modelInfo}>{props.data.description}</p>
          <ul className={styles.modelTextStats}>
            <li>
              <span className={styles.modelTextSpan}>
                {props.data.stats.range}
              </span>
              zasięgu na jednym ładowaniu
            </li>
            <li>
              <span className={styles.modelTextSpan}>
                {props.data.stats.hp}
              </span>
              mocy silnika
            </li>
            <li>
              <span className={styles.modelTextSpan}>
                {props.data.stats.persons}
              </span>
              osobowe
            </li>
          </ul>
         
        </div>
      </div>
    </div>
  );
};

export default Model;
