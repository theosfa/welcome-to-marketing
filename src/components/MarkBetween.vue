<template>
  <div class="container2">
    <div class="moving-line">
      <p class="moving-line-text">MARKETING</p>
      <p class="moving-line-text">•</p>
      <p class="moving-line-text">MARKETING</p>
      <p class="moving-line-text">•</p>
      <p class="moving-line-text">MARKETING</p>
      <p class="moving-line-text">•</p>
      <p class="moving-line-text">MARKETING</p>
      <p class="moving-line-text">•</p>
      <p class="moving-line-text">MARKETING</p>
      <p class="moving-line-text">•</p>
      <p class="moving-line-text">MARKETING</p>
      <p class="moving-line-text">•</p>
      <p class="moving-line-text">MARKETING</p>
      <p class="moving-line-text">•</p>
      <p class="moving-line-text">MARKETING</p>
      <p class="moving-line-text">•</p>
      <p class="moving-line-text">MARKETING</p>
    </div>
</div>
</template>

<style>
.container2 {
  width: 100%;
        overflow: hidden;
        /* white-space: wrap; */
        background-image: linear-gradient(to right, #D1D6D2, #D4D9D5, #D1D5D4, #D7D9D6, #D3D7D6, #D5D7D4, #D2D4D1);
  overflow-x: hidden;
  /* margin-bottom: 50px; */
    }

    .moving-line {
        display: flex;
        flex-flow: row nowrap;
        animation: moveLine 10s linear infinite;
    }

    .moving-line-text{
      display: flex;
      flex-flow: row nowrap;
      letter-spacing: 39%;
      font-size: 100px;
      font: Kadwa;
      margin: 0;
      padding-right: 100px;
    }

    @keyframes moveLine {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-50%);
        }
    }
</style>
