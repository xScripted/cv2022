<template>
  <div id="portfolio" class="section-container">
    <div class="container">
      <div class="section-title">Portfolio</div>
      <div class="portfolio-grid">
        <div class="product" 
          :class="project.id"
          v-for="project of allProjects" 
          :key="project.title" 
          :style="{ backgroundImage: 'url(' + project.media + ')' }">
          <div class="product-info">
            <div class="pr-title"> {{ project.title }} </div>
            <div class="pr-tech"> 
              <div v-for="tech of project.techs" :key="tech"> {{ techs[tech].name }} </div>
            </div>
            <div class="pr-btns">
              <div @click="openProject(project.id)">More information</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
export default {
    computed: {
      ...mapGetters(['allProjects', 'techs'])
    },
    methods: {
      ...mapMutations(['updateClosed', 'updateProject']),
      openProject(name) {
        this.updateProject(name);
        this.updateClosed(false);
      }
    }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
@import '@/assets/css/media-queries.scss';
#portfolio {
  .portfolio-grid {
    display: grid;
    width: 100%;
    height: 1400px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    justify-items: center;

    @include tablet {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      height: 500px;
    }

    .product {
      cursor: pointer;
      width: 80%;
      height: 80%;
      border-radius: 5px;
      background-color: rgba(194, 103, 255, 0.144);
      background-size: cover;
      background-position-y: 100%;
      background-repeat: no-repeat;
      overflow: hidden;
      box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%);

      &:hover {
        transition: 0.3s ease-in-out;
        .product-info {
          transform: translateY(0px);
        }
      }

      &.pexelsNative { 
        background-position-x: center;
      }

      .product-info {
        transition: 0.3s ease-in-out;
        width: 100%;
        height: 100%;
        background-color: $specialColor;
        transform: translateY(100%);
        text-align: center;

        .pr-title {
          font-weight: bold;
          padding-top: 30px;
          font-size: 25px;
        }

        .pr-tech {
          padding: 25px 10px;

          display: flex;
          justify-content: center;
          flex-wrap: wrap;

          div {
            font-size: 14px;
            padding-left: 10px;
          }
        }

        .pr-btns {
          display: flex;
          justify-content: space-evenly;
          div {
            border: 2px solid $contrastColor;
            padding: 5px 30px;
            color: $contrastColor;
            text-decoration: none;
            height: 20px;
          }
        }
      }
    }
  }
}
</style>
