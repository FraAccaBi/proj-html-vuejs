<template>
  <div class="slider my-container">
    <div class="header d-flex justify-content-between">
      <div class="logo ps-3">
        <img class="p-4" src="../../public/img/theme_eduprime_logo.png" alt="">
      </div>
      <NavbarComponent  class="pe-5 me-4"/>
    </div>
    
    <div class="main d-flex flex-column align-items-center">
      <h1 class="p-3">Key to your success</h1>
      <div class="text-container text-center">
        <p>
          Eduprime is the most versatile WordPress theme for educational purposes, shocasing universities, courses, secondary schools etc.
        </p>
        <div class="buttons d-flex justify-content-evenly pt-3">
          <button class="btn-yellow text-light">
            <span><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></span> Search courses
          </button>
          <button class="btn-white tx-pink">
            <span><font-awesome-icon icon="fa-solid fa-user-plus" /></span> Apply for university
          </button>
        </div>
      </div>
    </div>
    <div class="wave"></div>
    <div class="left-box d-flex flex-column gap-3 rounded-end">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      <font-awesome-icon icon="fa-solid fa-book-open" />
      <font-awesome-icon icon="fa-solid fa-circle-info" />
    </div>
  </div>
  
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue'
export default {
  name: 'SiteHeader',
  components:{
    NavbarComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/variables.scss";
@import "~@/assets/scss/style.scss";
.slider{
  background-image: url("../../public/img/theme_slider2_bg-1.jpg");
  background-size: 100%;
    background-position: top;
    background-repeat: no-repeat;
    height: 511px;
    margin-bottom: 130px;
    width: 1440px;
    position: relative;

  .header{
  background-color: $bg-pink-transparent;
  
  height: calc(600px / 6);
    .logo>img{
    max-height: 100px;
    }
  };
  .main{
    height: calc((492.5px / 6) * 5);
    padding-top: 4.5rem;
    background-color: $bg-pink-transparent;
    .text-container{
      width:480px ;
    }
  }
  .wave{
    background-image: url("../../public/img/screencapture.png") ;
    background-repeat: no-repeat;
    height: 130px;
    background-position: 10% 0%;
    background-size: cover;
  };
  .left-box{
    padding: 0.5rem;
    background-color: $btn-yellow;
    color: $text-light;
    position: absolute;
    top: 50%;
    left:0;
  }
}
h1,p{
  color: $text-light;
}

</style>
