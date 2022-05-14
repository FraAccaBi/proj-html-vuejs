<template>
  <div id="app" class="d-flex flex-column justify-content-center">
    <SiteHeader />
    <SiteMain />
    <SiteFooter />
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

<style lang="scss">
@import "~@/assets/scss/style.scss";
@import "~@/assets/scss/variables.scss";

</style>
