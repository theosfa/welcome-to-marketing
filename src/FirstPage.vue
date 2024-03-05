<template>
  <FirstPage/>
  <SecondPage/>
  <LineBetween/>
  <ThirdPage/>
  <MarkBetween/>
  <FourthPage/>
  <FivePage/>
</template>

<script>
import FirstPage from './components/FirstPage.vue'
import SecondPage from './components/SecondPage.vue'
import ThirdPage from './components/ThirdPage.vue'
import FourthPage from './components/FourthPage.vue'
import FivePage from './components/FivePage.vue'
import LineBetween from './components/LineBetween.vue'
import MarkBetween from './components/MarkBetween.vue'

export default {
  name: 'App',
  components: {
    FirstPage,
    SecondPage,
    ThirdPage,
    LineBetween,
    MarkBetween,
    FourthPage,
    FivePage,
  }
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

a{
  text-decoration: none;
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-image: linear-gradient(to right, #D1D6D2, #D4D9D5, #D1D5D4, #D7D9D6, #D3D7D6, #D5D7D4, #D2D4D1);
  overflow-x: hidden;
  color: #2c3e50;
  margin: 0px;
  padding: 0px;
  font-family: Kadwa;
}

.hero, .main-header, .gallery > * {
	will-change: transform;
}
</style>
