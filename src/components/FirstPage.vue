<template>
    <div class="container10">
        <!-- <img ref="parallaxElement" data-speed=".6" class="hero" :class="{ 'transparent': isTransparent }" src="../../public/images/firstpage.png" alt="Alt" > -->
        <div class="header">
            <div class="company-name">
                <p class="group"><router-link class="router-link" to="/">GROUP</router-link></p>
            </div>
            <div class="active-menu">
                <p class="products"><router-link class="router-link" to="/products">PRODUCTS</router-link></p>
                <div class="sign-up-block">
                    <div class="sign-up-back">
                        <p class="sign-up"><a href="#contact">CONTACT</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="middle-info">
            <p class="welcome">WELCOME TO</p>
            <p class="marketing">MARKETING</p>
        </div>
    </div>
</template>

<style>
    .container10{
        background-image: url(../../public/images/firstpage.png);
        background-position: center; 
        background-size: cover;
        /* background: linear-gradient(
            270deg,
            rgba(211, 213, 210, 1) 1%,
            rgba(211, 213, 210, 1) 3%,
            rgba(214, 216, 213, 1) 8%,
            rgba(212, 217, 214, 1) 15%,
            rgba(212, 216, 215, 1) 21%,
            rgba(212, 216, 215, 1) 23%,
            rgba(212, 216, 215, 1) 30%,
            gainsboro-2 44%,
            rgba(210, 214, 213, 1) 55%,
            rgba(210, 214, 213, 1) 57%,
            rgba(210, 214, 213, 1) 59%,
            rgba(210, 214, 213, 1) 62%,
            rgba(210, 214, 213, 1) 64%,
            rgba(210, 214, 213, 1) 68%,
            rgba(211, 215, 213, 1) 73%,
            rgba(212, 216, 213, 1) 79%,
            rgba(212, 218, 213, 1) 85%,
            rgba(211, 216, 212, 1) 89%,
            rgba(210, 215, 211, 1) 95%,
            rgba(210, 215, 211, 1) 98%,
            rgba(210, 215, 211, 1) 100%
        ); */
        /* background-color: rgba(212, 218, 213, 1);
        background-position-z: -2;
        overflow-x: hidden; */
        height: 100vh;
        width: auto;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-between;
        padding-left: 10%;
        padding-right: 10%;
        font-family: Kadwa;
    }
    .hero {
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: -1;
    }

    .header{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        width: 100%;
        font-family: Kadwa;
    }

    .active-menu{
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        font-family: Kadwa;
    }

    .middle-info{
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-end;
        align-items: center;
        /* width: 100%; */
        /* height: 100%; */
        margin-bottom: 50vh;
        font-family: Kadwa;
    }
    .sign-up-block{
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Kadwa;
    }

    .group{
        color: #000;
        font-family: Kadwa;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 11.7px;
        text-transform: uppercase;
    }

    .products,
    .contact{
        color: #000;
        font-family: Kadwa;
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-transform: uppercase;
        margin-right: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .sign-up{
        color: #FFF;
        font-family: Junge;
        font-size: 17px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .sign-up-back{
        display: flex;
        width: 124.933px;
        /* padding-top: 25%;
        padding-bottom: 25%; */
        height: 45%;
        padding: 3px 6px;
        align-items: flex-start;
        gap: 10px;
        align-items: center;
        justify-content: center;
        background: #000;
        border-radius: 35px;
        font-family: Kadwa;
    }

    .welcome{
        color: #000;
        font-family: Kadwa;
        font-size: 30px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 11.7px;
        text-transform: uppercase;
    }

    .marketing{
        color: #000;
        font-family: Kadwa;
        font-size: 70px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 27.3px;
        margin-top: 0px;
    }

</style>