<template>
    <div id="rights">
        Copyright 2021 all rights reserved <br> This website is made with 💖 by <a href="https://www.linkedin.com/in/miquel-toran-surina/"> Miquel Torán </a> 
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/variables.scss';

    #rights {
        width: 100%;
        height: 35px;
        background: rgb(19, 19, 19);
        text-align: center;
        padding-top: 10px;
        overflow: hidden;
        font-size: 12px;
        color: lightgray;

        a, a:visited {
            text-decoration: none;
            color: $contrastColor;
            
        }
    }
</style>
