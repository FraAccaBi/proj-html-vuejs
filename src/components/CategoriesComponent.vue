<template>
      <div class="navbar d-flex ">
        <ul class="list-unstyled d-flex flex-wrap justify-content-end">
          <li class="border rounded-pill px-2 m-1 text-light text-uppercase" v-for="element in categories" :key="element.id"> {{element.name}}</li>
        </ul>
      </div>

  
</template>

<script>
export default {
  name: 'CategoriesComponent',
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
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/variables.scss";
@import "~@/assets/scss/style.scss";
.border{
    font-size: smaller;
}

</style>
