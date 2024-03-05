<!-- <template>
  <FirstPage/>
  <SpaceBetween/>
  <SecondPage/>
  <LineBetween/>
  <ThirdPage/>
  <MarkBetween/>
  <FourthPage/>
  <FivePage/>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template> -->

<!-- <script>
// import HelloWorld from './components/HelloWorld.vue'
import FirstPage from './components/FirstPage.vue'
import SecondPage from './components/SecondPage.vue'
// import SpaceBetween from './components/SpaceBetween.vue'
import ThirdPage from './components/ThirdPage.vue'
import FourthPage from './components/FourthPage.vue'
import FivePage from './components/FivePage.vue'
import LineBetween from './components/LineBetween.vue'
import MarkBetween from './components/MarkBetween.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    FirstPage,
    SecondPage,
    // SpaceBetween,
    ThirdPage,
    LineBetween,
    MarkBetween,
    FourthPage,
    FivePage,
  }
}
</script> -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>
:root {
  /*========== Colors ==========*/
  /*Color mode HSL(hue, saturation, lightness)*/
  --first-color: hsl(38, 92%, 58%);
  --first-color-light: hsl(38, 100%, 78%);
  --first-color-alt: hsl(32, 75%, 50%);
  --second-color: hsl(195, 75%, 52%);
  --dark-color: hsl(212, 40%, 12%);
  --white-color: hsl(212, 4%, 95%);
  --body-color: hsl(212, 42%, 15%);
  --container-color: hsl(212, 42%, 20%);

  /*========== Font and typography ==========*/
  /*.5rem = 8px | 1rem = 16px ...*/
  --body-font: "Bai Jamjuree", sans-serif;
  --h2-font-size: 1.25rem;
  --normal-font-size: 1rem;
}

.router-link{
  text-decoration: none;
  color: #000;
}

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: linear-gradient(to right, #D1D6D2, #D4D9D5, #D1D5D4, #D7D9D6, #D3D7D6, #D5D7D4, #D2D4D1);
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
  font-family: Kadwa;
} */
</style>
