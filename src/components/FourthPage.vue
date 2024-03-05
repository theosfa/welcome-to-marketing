<template>
  <div class="page-2">
    <div class="main">
      <div class="image">
        <img src="../../public/images/Rectangle 17.png" alt="">
      </div>
      <div class="text">
        <div class="main-text">
          <p class="how-we-work">HOW WE WORK</p>
          <p class="just-text">Lorem ipsum dolor sit amet consectetur. Sit mi dictumst nisl imperdiet ornare arcu etiam. Eleifend lorem bibendum integer est gravida. Purus enim risus egestas quis cum quis eget.</p>
        </div>
        <div class="not-main-text">
          <ul>
            <li>Lorem ipsum dolor sit</li>
            <li>Amet consectetur</li>
            <li>Lorem ipsum dolor sit</li>
            <li>Amet consectetur</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sponsor">
      <div><img src="../../public/images/Rectangle 18.png" alt="" class="sponsored"></div>
      <div><img src="../../public/images/Rectangle 19.png" alt="" class="sponsored"></div>
      <div><img src="../../public/images/Rectangle 20.png" alt="" class="sponsored"></div>
      
    </div>
  </div>
</template>

<style  scoped>
.page-2 {
  background-image: linear-gradient(to right, #D1D6D2, #D4D9D5, #D1D5D4, #D7D9D6, #D3D7D6, #D5D7D4, #D2D4D1);
  overflow-x: hidden;
  height: 110vh;
  padding-left: 10%;
  padding-right: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
        font-family: Kadwa;
}

.main{
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70%;
  /* background-color: aqua; */
        font-family: Kadwa;
}

.text{
  display: flex;
  flex-flow: column nowrap;
  padding-left: 5%;
  width: 55%;
  margin-left: 30px;
  justify-content: space-between;
  align-items: flex-start;
  text-align:left;
  font-family: Kadwa;
  line-height: 1.5;
}

.main-text{
  display: flex;
  flex-flow: column nowrap;
  font-family: Kadwa;
}

.how-we-work{
  color: #00526B;
  font-size: 70px;
  margin: 0;
  font-family: Kadwa;
}

.just-text{
  font-size: 30px;
  font-family: Kadwa;
}

.not-main-text{
  font-size: 30px;
  font-family: Kadwa;
}

.image{
  width: 40%;
  font-family: Kadwa;
}

.image img{
  width: 100%;
  font-family: Kadwa;
}

.sponsor{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  height: 30%;
  width: 100%;
        font-family: Kadwa;
  /* align-items: center; */
}

</style>