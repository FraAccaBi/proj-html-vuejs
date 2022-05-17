<template>
  <div class="footer container-fluid py-5">
    <div class="container">
      <div class="row row-cols-3">
        <div class="col">
          <img width="80%" src="../../public/img/theme_eduprime_logo.png" alt="">
          <p class="text-light pt-3">
            Eduprime is the most versatile WordPress theme for educational purposes, showcasing univesities, courses, secondary schools, etc.
          </p>
          <div class="icons-box">
            <font-awesome-icon class="icons" icon="fa-brands fa-facebook-f" />
            <font-awesome-icon class="icons" icon="fa-brands fa-twitter" />
            <font-awesome-icon class="icons" icon="fa-brands fa-instagram" />
          </div>
        </div>
        <div class="col d-flex">
          <FooterSection />
        </div>
        <div class="col">
          <div class="search">
            
          </div>
          <div class="categories d-flex flex-column align-items-right">
            <h5 class="text-light align-self-end">
              Search categories
            </h5>
            <CategoriesComponent />
            <span class="align-self-end">
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
.icons-box{
  margin-left: -0.9rem;
  .icons{
    color: $text-light;
    height: 1.2rem;
    width: 1.2rem;
    margin: 1rem;
    border: 2px solid $border-yellow;
    border-radius:1.5rem;
    padding: 0.5rem;
  }
}
span{
  color: $text-yellow;
  
}
</style>
