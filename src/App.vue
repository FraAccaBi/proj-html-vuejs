<template>
  <div id="app" class="d-flex flex-column justify-content-center">
    <SiteHeader />
    <SiteMain />
    <SiteFooter />
    <a class="arrow" href="#">
      <font-awesome-icon icon="fa-solid fa-chevron-up" />
    </a>
  </div>
</template>

<script>
import SiteHeader from './components/SiteHeader.vue'
import SiteMain from './components/SiteMain.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter

  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/style.scss";
@import "~@/assets/scss/variables.scss";
#app{
  position:relative;
  .arrow{
    background-color: $btn-yellow;
    padding: 0.9rem;
    border-radius: 100%;
    color: $text-light;
    position: fixed;
    bottom: 3rem;
    right: 3rem;
  }
}

</style>
