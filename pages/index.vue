<template>
  <div id="index" :class="{ loaded }">
    <Menu></Menu>
    <IndexHeading></IndexHeading>
    <IndexAbout></IndexAbout>
    <IndexSkills></IndexSkills>
    <IndexExperience></IndexExperience>
    <IndexPortfolio></IndexPortfolio>
    <IndexContact></IndexContact>
    <Footer></Footer>

    <ProjectVisualizer></ProjectVisualizer>
  </div>
</template>

<script>
export default {
  components: true,
  data() {
    return {
      loaded: false,
    }
  },
  mounted() {
    this.loaded = true;
  }
}
</script>

<style scoped>

  #index {
    opacity: 0;
  }

  .loaded {
    transition: 1s ease-in !important;
    opacity: 1 !important;
  }

</style>
