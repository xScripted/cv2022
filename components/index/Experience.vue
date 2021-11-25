<template>
    <div id="edandjobs" class="container">
        <div id="languages" class="section-container">
            <div class="section-title"> Languages </div>
            <div class="rows">
                <div class="spoken">
                    <div class="main-text"> Spanish: <span> Native </span>  </div>
                    <div class="main-text"> Catalan: <span> Native </span>  </div>
                    <div class="main-text"> English: <span> B2 </span>  </div>
                </div>
            </div>
        </div>

        <div id="jobs" class="section-container">
            <div class="section-title"> Experience </div>
            <div class="rows">

                <div class="main-text">
                    FULLSTACK DEVELOPER <br> <div class="duration"> 1 year 6 months </div>
                    <div class="subtext">MEDIAGACH - BADALONA</div>
                </div>

                <div class="main-text">
                    WEB DEVELOPER WORDPRESS <br> <div class="duration"> 5 months </div>
                    <div class="subtext">AFXSOLUTIONS - BADALONA</div>
                </div>

                <div class="main-text">
                    IT MAITENANCE AND WEB <br> <div class="duration"> 3 months </div>
                    <div class="subtext">FUNKCIONA ARCHITEKCI - POLONIA</div>
                </div>

                <div class="main-text">
                    IT MAITENANCE <br> <div class="duration"> 9 months </div>
                    <div class="subtext">ALCAMBARCELONA - BARCELONA</div>
                </div>

                <div class="main-text">
                    IT MAITENANCE <br> <div class="duration"> 7 months </div>
                    <div class="subtext">INS LA PINEDA - BADALONA</div>
                </div>
                    
            </div>
        </div>


        <div id="education" class="section-container">
            <div class="section-title"> Education </div>
            <div class="rows">

                <div class="main-text">
                    Superior grade of Web Applications Development (DAW)
                    <div class="subtext">INS LA PINEDA - BADALONA</div>
                </div>

                <div class="main-text">
                    Medium grade of Microcomputer systems and networks (SMX)
                    <div class="subtext">INS LA PINEDA - BADALONA</div>
                </div>
                
            </div>
        </div>
    
  
    </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/variables.scss';
    @import '@/assets/css/media-queries.scss';
    
    #edandjobs {
        display: grid;
        
        @include tablet {
            grid-template-columns: 1fr 1fr 1fr;

            .main-text {
                text-align: center;
            }
        }
        
        .main-text {
            margin-top: 30px;
            margin-left: 50px;
            margin-right: 50px;
            font-size: 17px;

            span {
                color: $secondColor;
            }
            
            .duration {
                color: rgb(195, 195, 195);
                font-size: 14px;
            }

            .subtext {
                color: $secondColor;
                font-size: 13px;
                font-style: italic;
            }
        }
    }
</style>
