<template>
  <div class="slider my-container">
    <div class="header d-flex ">
      <div class="logo">
        <img class="p-4" src="../../public/img/theme_eduprime_logo.png" alt="">
      </div>
      <div class="navbar d-flex ">
        <ul class="list-unstyled d-flex ">
          <li v-for="element in navbar" :key="element.id"> {{element.name}}</li>
        </ul>
      </div>
    </div>
    
    <div class="main d-flex flex-column align-items-center">
      <div class="text-container">
        <h1>Key to your success</h1>
        <p>Eduprime is the most versatile WordPress theme for educational purposes, shocasing universities, courses, secondary schools etc.</p>
        <div class="buttons d-flex">
          <button class="btn-yellow text-light">
            <span>Search icon</span> Search courses
          </button>
          <button class="btn-white text-pink">
            <span>Add a friend icon</span> Apply for university
          </button>
        </div>
      </div>
    </div>
    <div class="wave"></div>
  </div>
  
</template>

<script>
export default {
  name: 'SiteHeader',
  data() {
   return {
      navbar: [
        {
          name:'Home',
          id: 1
        },
        {
          name: 'Courses',
          id: 2
        },
        {
          name:'About Us',
          id: 3
        }, 
        {
          name:'News',
          id: 4
        }, 
        {
          name:'Pages',
          id: 5
        }, 
        {
          name:'Contact',
          id: 6
        }, 
        {
          name: 'Purchase',
          id: 7
        }
      ],
      bg_imgs:[
        {
          id:1,
          url: '../../public/img/theme_slider1_bg-1.jpg'
        },
        {
          id:2,
          url: '../../public/img/theme_slider2_bg-1.jpg'
        },
        {
          id:3,
          url: '../../public/img/theme_slider3_bg-1.jpg'
        }
      ]
    }
  },
  methods: {
    slider(){
      setInterval
    }
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

  .header{
  background-color: $bg-pink-transparent;
  
  height: calc(600px / 6);
    .logo>img{
    max-height: 100px;
    }
  };
  .main{
    height: calc((492.5px / 6) * 5);
    background-color: $bg-pink-transparent;
    .text-container{
      width:415px ;
    }
  }
  .wave{
    background-image: url("../../public/img/screencapture.png") ;
    background-repeat: no-repeat;
    height: 130px;
    
    background-position: 10% 0%;
    background-size: cover;
    
    
    
  }
}

</style>
