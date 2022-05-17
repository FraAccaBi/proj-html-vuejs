<template>
<div>
    <div class="get-edu">
        <h5>Get Eduprime</h5>
        <ul class="list-unstyled">
            li
        </ul>
    </div>
    <div class="networking">
        <h5>Networking</h5>
        <ul class="list-unstyled">
            li
        </ul>
    </div>

</div>
</template>

<script>
export default {
  name: 'FooterSection',
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