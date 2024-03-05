<template>
  <div class="page-2">
    <p class="package-of-service">Package of service</p>
    <div class="main">
      <div class="lorem">
        <div class="lorem-ipsum">
          <p class="lorem-ipsum-p">Lorem ipsum</p>
        </div>
        <div class="lorem-ipsum">
          <p class="lorem-ipsum-p">Lorem ipsum</p>
        </div>
        <div class="lorem-ipsum">
          <p class="lorem-ipsum-p">Lorem ipsum</p>
        </div>
        <div class="lorem-ipsum">
          <p class="lorem-ipsum-p">Lorem ipsum</p>
        </div>
      </div>
      <div class="image-beautifull"></div>
    </div>
  </div>
</template>

<style  scoped>
.page-2 {
  background-image: linear-gradient(to right, #D1D6D2, #D4D9D5, #D1D5D4, #D7D9D6, #D3D7D6, #D5D7D4, #D2D4D1);
  overflow-x: hidden;
  /* background-color: blueviolet; */
  overflow: hidden;
  height: 100vh;
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
  width: 100%;
  height: 100%;
        font-family: Kadwa;
  /* background-color: aqua; */
}

.lorem{
  width: 50%;
  height: 100%;
  /* background-color: blueviolet; */
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
        font-family: Kadwa;
}

.lorem-ipsum{
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 15%;
  margin-bottom: 30px;
  background-color: #C7D3D3;
        font-family: Kadwa;
}

.lorem-ipsum-p{
  color: #000;
  font-family: Kadwa;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 60px */
  letter-spacing: 12.4px;
  text-transform: capitalize;
        font-family: Kadwa;
}

.image-beautifull{
  width: 50%;
  height: 85%;
  background-image: url(../../public/images/image.png);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
        font-family: Kadwa;
}

.package-of-service{
  color: #000;
  font-family: Kadwa;
  font-size: 70px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 105px */
  letter-spacing: 21.7px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-bottom: 0px; */
  /* background-color: blue; */
  width: 100%;
        font-family: Kadwa;
}
</style>