<template>
  <div class="slider">
    <div class="header d-flex">
      <div class="logo">
        <img class="p-4" src="../../public/img/theme_eduprime_logo.png" alt="">
      </div>
      <div class="navbar d-flex ">
        <ul class="list-unstyled d-flex ">
          <li v-for="element in navbar" :key="element.id"> {{element.name}}</li>
        </ul>
      </div>
    </div>
    
    <div class="main">

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
.slider{
  background-image: url("../../public/img/theme_slider2_bg-1.jpg");
  background-size: 102%;
    background-position: 55% 104%;
    background-repeat: no-repeat;
    max-width: 1440px;
    height: 700px;

  .header{
  background-color: $bg-pink-transparent;
  
  height: calc(600px / 6);
    .logo>img{
    max-height: 100px;
    }
  };
  .main{
    height: calc((600px / 6) * 5);
    background-color: $bg-pink-transparent;
  }
  .wave{
    background-image: url("../../public/img/screencapture.png") ;
    background-repeat: no-repeat;
    height: 100px;
    
    background-position: 10% 20%;
    background-size: cover;
    
    
    
  }
}

</style>
