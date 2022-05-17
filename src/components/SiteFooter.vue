<template>
  <div class="footer container-fluid">
    <div class="container">
      <div class="row row-cols-3">
        <div class="col">
          ciao
        </div>
        <div class="col d-flex">
          <FooterSection />
        </div>
        <div class="col">
          <div class="search">
            ciao
          </div>
          <div class="categories">
            <h5>
              Search categories
            </h5>
            <CategoriesComponent />
            <span>
              ModelTheme. All rights reserved
            </span>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import FooterSection from '@/components/FooterSection.vue'
import CategoriesComponent from '@/components/CategoriesComponent.vue'
export default {
  name: 'SiteFooter',
  components: {
    CategoriesComponent,
    FooterSection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/variables.scss";
@import "~@/assets/scss/style.scss";
.footer{
  background-color: $bg-pink;
}
</style>
