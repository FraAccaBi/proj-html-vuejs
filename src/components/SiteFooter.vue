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
        <div class="col">
          <FooterSection 
          :getEdu="getEdu"
          :networking="networking"
          />
        </div>
        <div class="col">
          <div class="search">
            <input type="text" placeholder="Search...">
             <font-awesome-icon class="lens" icon="fa-solid fa-magnifying-glass" />
          </div>
          <div class="categories d-flex flex-column align-items-right">
            <h5 class="text-light align-self-end">
              Search categories
            </h5>
            <CategoriesComponent
            :categories="categories"
             />
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
  },
  data() {
   return {
      categories: [
        {
          name:'Economy',
          id: 1
        },
        {
          name: 'Design',
          id: 2
        },
        {
          name:'Coaching',
          id: 3
        }, 
        {
          name:'Business',
          id: 4
        }, 
        {
          name:'Medicine',
          id: 5
        }, 
        {
          name:'Law',
          id: 6
        }, 
        {
          name: 'Fitness',
          id: 7
        }
      ],
      getEdu: [
        {
          text:'Request a website',
          id: 1
        },
        {
          text: 'Browse Themes',
          id: 2
        },
        {
          text:'Payment option',
          id: 3
        }, 
        {
          text:'Support System',
          id: 4
        }, 
        {
          text:'Checkout',
          id: 5
        }, 
        {
          text:'Purchase Theme',
          id: 6
        }
      ],
      networking: [
        {
          text:'Purchase Theme',
          id: 1
        },
        {
          text: 'Our benefit',
          id: 2
        },
        {
          text:'Our Team',
          id: 3
        }, 
        {
          text:'Our Services',
          id: 4
        }, 
        {
          text:'Other Products',
          id: 5
        }, 
        {
          text:'My Account',
          id: 6
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/variables.scss";
@import "~@/assets/scss/style.scss";
.footer{
  background-color: $bg-pink;
  .icons-box{
  margin-left: -0.9rem;
  cursor: pointer;
  .icons{
    color: $text-light;
    height: 1rem;
    width: 1.2rem;
    margin: 1rem;
    border: 2px solid $border-yellow;
    border-radius:1.5rem;
    padding: 0.5rem;
    &:hover{
      color: $border-yellow;
    }
  }
  }
  span{
  color: $text-yellow;
  }
  
}

</style>
