<template>
      <div class="navbar ">
        <ul class="list-unstyled d-flex justify-content-between align-items-center">
          <li class="tx-light pe-3" :navbar="navbar" v-for="element in navbar" :key="element.id"> {{element.name}} 
            <font-awesome-icon class="icon" icon="fa-solid fa-caret-down" />
          </li>
        </ul>
        <button class="btn-yellow tx-light text-uppercase">
          View Courses
        </button>
      </div>

  
</template>

<script>
export default {
  name: 'NavbarComponent',
  props:{
    navbar: Array,
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/variables.scss";
@import "~@/assets/scss/style.scss";
.navbar{
  width: 60%;
  ul{
    width: 75%;
    padding-top: 0.5rem; 
  };
  button{
    width: 25%;
  }
  .icon{
    font-size: small;
  }
}

</style>
