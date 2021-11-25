<template>
  <div>
    <div id="menuBurger" @click="closed = !closed">
        <div class="burger"></div>
    </div>
    <div id="menu" :class="{ closed }">

        <div id="close-menu" style="cursor: pointer;" @click="closed = true"> x </div>

        <div class="items" @click="closed = true">
            <div id="m-home" class="item"> <a href="#Heading"> 🏠 Home </a> </div>
            <div id="m-about" class="item"> <a href="#about"> 🧑🏻 About </a></div>
            <div id="m-skills" class="item"> <a href="#skills"> 👨🏻‍💻 Skills </a></div>
            <div id="m-ed" class="item"> <a href="#edandjobs"> 📜 Experience </a></div>
            <div id="m-portfolio" class="item"> <a href="#portfolio"> ⭐ Portfolio </a></div>
            <div id="m-contact" class="item"> <a href="#contact"> 📧 Contact me </a> </div>
        </div>

    </div>
    <div class="web-close-menu" :class="{ closed }" @click="closed = true"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            closed: true
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/variables.scss';
    @import '@/assets/css/media-queries.scss';

    #menuBurger {
        cursor: pointer;
        position: fixed;
        width: 50px;
        height: 50px;
        margin: 20px;
        z-index: 1;

        .burger {
            position: fixed;
            width: 30px;
            height: 50px;
            height: 3px;
            border-radius: 5px;
            background-color: $contrastColor;

            &::before {
                content: '';
                display: block;
                margin-top: 10px;
                width: 30px;
                border-radius: 5px;
                height: 3px;
                background-color: $contrastColor;
            }

            &::after {
                content: '';
                display: block;
                margin-top: 7px;
                border-radius: 5px;
                width: 30px;
                height: 3px;
                background-color: $contrastColor;
            }
        }
    }

    #menu {
        transition: .5s ease-in-out;
        width: 100%;
        max-width: 350px;
        height: 100vh;
        position: fixed;
        background-color: $specialColor;
        z-index: 10;
        overflow: hidden;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        opacity: 1;
        box-shadow: 0 8px 17px 2px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%), 0 5px 5px -3px rgb(0 0 0 / 20%);
        
        a, a:visited {
            text-decoration: none;
            color: $contrastColor;
        }

        #close-menu {
            position: absolute;
            right: 10px;
            top: 10px;
            font-size: 30px;
            font-family: 'Ubuntu';
            padding: 30px;
        }

        .items {
            padding: 50px;
            overflow-wrap: break-word;

            .item {
                margin-top: 40px;
                font-size: 30px;
            }
        }
    }

    .closed {
        transition: .5s;
        opacity: 0;
        width: 0% !important;
    }

    .web-close-menu {
        position: fixed;
        width: 100%;
        height: 100vh;
        z-index: 1;
    }

</style>