<template>
    <div class="container5">
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
    </div>
</template>
    

<style>
    .container5{
        background-color: #00526b5f;
        backface-visibility: 35%;
        width: auto;
        height: 100px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        padding-left: 10%;
        padding-right: 10%;
        font-family: Kadwa;
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