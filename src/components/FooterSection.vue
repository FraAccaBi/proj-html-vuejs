<template>
<div class="row text-light">
    <div class="get-edu col">
        <h5>Get Eduprime</h5>
        <ul class="list-unstyled">
            <li v-for="element in getEdu" :key="element.id"> {{element.text}}</li>
        </ul>
    </div>
    <div class="networking col">
        <h5>Networking</h5>
        <ul class="list-unstyled">
            <li v-for="element in networking" :key="element.id"> {{element.text}}</li>
        </ul>
    </div>

</div>
</template>

<script>
export default {
  name: 'FooterSection',
  data() {
   return {
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


</style>