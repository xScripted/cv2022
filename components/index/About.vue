<template>
      <div id="about" class="section-container">
        <div class="container">
            <div class="section-title"> About </div>

            <div class="about-block">
                <div class="howiam">

                    <h3> ¿Who Am I?</h3>
                    <div class="me">
                        My name is Miquel Torán. <br> I am a web developer from Barcelona 📌 <br>
                        Now I am looking for an opportunity to expand my skills and grow as a professional.
                        <br> <br>
                        Learning more every day about anything related to web development.
                        I'm a big fan of ⭐ Javascript. <br> <br>
                        If you want to know more about me, 👇 scroll! 👇
                    </div>
                </div>
                <div class="web-img1"> </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped lang="scss">
    @import '@/assets/css/variables.scss';
    @import '@/assets/css/media-queries.scss';
    #about {
        .about-block {
            display: grid;
            grid-template-columns: 1fr;
            justify-items: center;

            @include tablet {
                grid-template-columns: 10fr 9fr;
                margin-bottom: 150px;
            }

            .howiam{
                h3 {
                    text-align: center;
                }

                .me {
                    margin: 30px;
                    font-size: 20px;
                    text-align: center;
                    font-family: 'Karla';
                }

                @include tablet {
                    margin-top: 70px;
                }
            }

            .web-img1{
                width: 80%;
                height: 400px;
                background-image: url('/img/final.png');
                background-size: 100%;
                background-position: center;
                background-repeat: no-repeat;
            }
        }
    }
</style>
