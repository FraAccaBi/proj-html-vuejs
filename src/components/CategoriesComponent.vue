<template>
      <div class="navbar d-flex ">
        <ul class="list-unstyled d-flex flex-wrap justify-content-end">
          <li class="border rounded-pill px-2 m-1 text-light text-uppercase" :categories="categories"  v-for="element in categories" :key="element.id"> {{element.name}}</li>
        </ul>
      </div>

  
</template>

<script>
export default {
  name: 'CategoriesComponent',
  props: {
    categories: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/variables.scss";
@import "~@/assets/scss/style.scss";
.border{
    font-size: smaller;
    cursor: pointer;
    &:hover{
      color: $btn-yellow!important;
      border: 1px solid $btn-yellow!important;
    }
}

</style>
