<template>
    <div id="skills" class="section-container">
        <div class="container">
            <div class="section-title"> Skills </div>
            <div class="skills">
                <div class="block">
                    <div class="high-title"> FRONTEND </div>
                    <div class="low-title"> Web </div>
                    <div class="low-title"> Styles </div>
    
                    <div class="list">
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.html5.logo }')`}"> </div>
                            <div class="name"> {{ techs.html5.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.javascript.logo }')`}"> </div>
                            <div class="name"> {{ techs.javascript.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.vue.logo }')`}"> </div>
                            <div class="name"> {{ techs.vue.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.nuxt.logo }')`}"> </div>
                            <div class="name"> {{ techs.nuxt.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.wordpress.logo }')`}"> </div>
                            <div class="name"> {{ techs.wordpress.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.react.logo }')`}"> </div>
                            <div class="name"> {{ techs.react.name }} </div>
                        </div>
                    </div>
    
                    <div class="list">
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.css3.logo }')`}"> </div>
                            <div class="name"> {{ techs.css3.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.sass.logo }')`}"> </div>
                            <div class="name"> {{ techs.sass.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.materialize.logo }')`}"> </div>
                            <div class="name"> {{ techs.materialize.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.bootstrap.logo }')`}"> </div>
                            <div class="name"> {{ techs.bootstrap.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.vuetify.logo }')`}"> </div>
                            <div class="name"> {{ techs.vuetify.name }} </div>
                        </div>
                    </div>
                </div>
    
                <div class="block">
                    <div class="high-title"> BACKEND </div>
                    <div class="low-title"> Server </div>
                    <div class="low-title"> Database </div>
    
                    <div class="list">
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.node.logo }')`}"> </div>
                            <div class="name"> {{ techs.node.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.php.logo }')`}"> </div>
                            <div class="name"> {{ techs.php.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.laravel.logo }')`}"> </div>
                            <div class="name"> {{ techs.laravel.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.docker.logo }')`}"> </div>
                            <div class="name"> {{ techs.docker.name }} </div>
                        </div>
                    </div>
    
                    <div class="list">
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.mongodb.logo }')`}"> </div>
                            <div class="name"> {{ techs.mongodb.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.mysql.logo }')`}"> </div>
                            <div class="name"> {{ techs.mysql.name }} </div>
                        </div>
                        <div class="card" v-if="false">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.firebase.logo }')`}"> </div>
                            <div class="name"> {{ techs.firebase.name }} </div>
                        </div>
                    </div>
                </div>
    
                <div class="block">
                    <div id="others" class="high-title"> Others </div>
                    <div class="low-title"> Workflow </div>
                    <div class="low-title"> Frameworks </div>
    
                    <div class="list">
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.vscode.logo }')`}"> </div>
                            <div class="name"> {{ techs.vscode.name }}</div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.git.logo }')`}"> </div>
                            <div class="name"> {{ techs.git.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.webpack.logo }')`}"> </div>
                            <div class="name"> {{ techs.webpack.name }} </div>
                        </div>
                        <div class="card" v-if="false">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.jest.logo }')`}"> </div>
                            <div class="name"> {{ techs.jest.name }} </div>
                        </div>
                    </div>
    
                    <div class="list">
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.electron.logo }')`}"> </div>
                            <div class="name"> {{ techs.electron.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.selenium.logo }')`}"> </div>
                            <div class="name"> {{ techs.selenium.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.threejs.logo }')`}"> </div>
                            <div class="name"> {{ techs.threejs.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.greensock.logo }')`}"> </div>
                            <div class="name"> {{ techs.greensock.name }} </div>
                        </div>
                        <div class="card">
                            <div class="logo" :style="{ backgroundImage: `url('${ techs.howler.logo }')`}"> </div>
                            <div class="name"> {{ techs.howler.name }} </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(['techs'])
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/variables.scss';
    @import '@/assets/css/media-queries.scss';
    
    #skills {
        margin: 20px;

        .skills {
            margin-top: 20px;
            width: 100%;
            height: 100%;

            display: grid;
            grid-template-columns: 1fr;
            justify-items: center;

            @include tablet {
                grid-template-columns: 1fr 1fr 1fr;
            }

            .block {
                display: grid;
                height: 100%;
                width: 100%;
                max-width: 400px;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 40px 30px 1fr;
                text-align: center;
                margin-top: 50px;

                .high-title {
                    grid-column: 1 / 3;
                    font-size: 20px;
                }

                .low-title {
                    border-bottom: 2px solid white;
                }

                .card { 
                    transition: .5s ease-in-out;
                    margin-top: 20px;
                    width: 100%;
                    height: 90px;

                    .logo {
                        width: 60px;
                        height: 60px;
                        margin: auto;
                        margin-bottom: 5px;
                        border-radius: 5px;

                        background-size: 100%;
                        background-position: center;
                        background-repeat: no-repeat;
                    }

                    .name {
                        font-family: 'Karla';
                        font-weight: 300;
                    }
                }
            }

        }
    }
</style>
