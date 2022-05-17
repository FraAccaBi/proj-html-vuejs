<template>
<div>
    <ul class="btn-border">
        <li>
            
        </li>
    </ul>
</div>

  
</template>

<script>
export default {
  name: 'CategoriesComponent',
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