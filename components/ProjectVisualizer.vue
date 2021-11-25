<template>
    <transition name="fade">
        <div id="project-visualizer" v-if="!closed">
            <div class="project-bg" @click="updateClosed(true)"></div>
            <div class="project-content">
                <div class="close" @click="updateClosed(true)"> x </div>

                <h1> {{ project.title }} </h1>

                <h3> Description </h3>
                <div class="description" v-html="project.description"></div>

                <h3> Techs </h3>
                <div id="techs">
                    <div v-for="tech in project.techs" :key="tech">
                        <div class="tech">
                            <div class="logo" :style="{ backgroundImage: `url(${ techs[tech].logo })`}"></div>
                            <div class="name"> {{ techs[tech].name }} </div>
                        </div>
                    </div>
                </div>

                <h3> Aditional Information </h3>
                <div class="links">
                    <a :href="project.github" v-if="project.github.length > 0" target="blank_">
                        <div class="logo" style="background-image: url(img/icons/github.png)"></div>
                    </a>
                    <a :href="project.web" v-if="project.web.length > 0" target="blank_">
                        <div class="logo" style="background-image: url(img/icons/www.png)"></div>
                    </a>
                </div>

                <img :src="project.media" class="media">
            </div>
        </div>
    </transition>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(['closed', 'project', 'techs'])
    },
    methods: {
        ...mapMutations(['updateClosed'])
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/variables.scss';
    #project-visualizer {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;

        .project-bg{
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.9);
        }

        .project-content {
            position: relative;
            margin: auto;
            margin-top: 5vh;
            overflow-y: scroll;
            background-color: $mainColor;
            border-radius: 5px;
            width: 90%;
            height: 90vh;
            box-shadow: 0 8px 17px 2px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%), 0 5px 5px -3px rgb(0 0 0 / 20%);

            .close {
                cursor: pointer;
                position: absolute;
                right: 10px;
                font-size: 30px;
                padding: 20px;
                font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            }

            h1 {
                text-align: center;
                margin-top: 55px;
            }

            h3 {
                margin: 30px;
            }

            .description {
                margin: 30px;
            }

            #techs {
                display: flex;

                .tech {
                    width: 100px;
                    text-align: center;
                    margin: 20px;
                }
            }

            .links {
                display: flex;

                a {
                    width: 100px;
                    text-align: center;
                    margin: 20px;
                }
            }

            .media {
                position: relative;
                margin: 2%;
                width: 96%;
                box-shadow: 0 8px 17px 2px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%), 0 5px 5px -3px rgb(0 0 0 / 20%);
                border-radius: 5px;
            }

        }

    }
</style>
