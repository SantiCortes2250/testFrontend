import React, { useState, useEffect } from "react";
import style from "../../styles/gallerie.module.css";
import img from "../../assets/images/barChartbg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import axios from "axios";

const Galleries = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const url = "https://picsum.photos/v2/list?page=2&limit=100";

    const getImages = async () => {
      const res = await axios.get(url);
      setImages(res.data);
    };

    getImages();
  }, []);

  return (
    <div className={style.gallerie}>
      <h2 className={style.title}>Event Galleries</h2>

      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={style.images_gallerie}
      >
        {images.map((image) => (
          <SwiperSlide className={style.swiper} key={image.id}>
            <img src={image.download_url} alt={image.author} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Galleries;
