<template>
  <div class="container3">
    <p class="package-of-service2">Our employees</p>
      <swiper
        :effect="'coverflow'"
        :slidesPerView="3"
        :grabCursor="true"
        :centeredSlides="true"
        :coverflowEffect="{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }"
        :loop="true"
        :pagination="true"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
        >
        <swiper-slide><img src="../../public/images/avatar-1.png" /></swiper-slide>
        <swiper-slide><img src="../../public/images/avatar-2.png" /></swiper-slide>
        <swiper-slide><img src="../../public/images/avatar-3.png" /></swiper-slide>
        <swiper-slide><img src="../../public/images/avatar-4.png" /></swiper-slide>
        <swiper-slide><img src="../../public/images/avatar-5.png" /></swiper-slide>
      </swiper>
  </div>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';

  // import './style.css';

  // import required modules
  import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [EffectCoverflow, Pagination, Navigation],
      };
    },
  };
</script>

<style>
.container3{
  /* width: 100vw; */
  background-image: linear-gradient(to right, #D1D6D2, #D4D9D5, #D1D5D4, #D7D9D6, #D3D7D6, #D5D7D4, #D2D4D1);
  overflow-x: hidden;
  height: 95vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 30%;
  /* height: 300px; */
  background-color: #798D90;
}

.swiper-slide img {
  /* display: block; */
  width: 100%;
}

  .package-of-service2{
  color: #00526B;
  font-family: Kadwa;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 23.4px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 0px; */
  /* background-color: blue; */
  width: 100%;
  margin-top: 40px;
}
</style>