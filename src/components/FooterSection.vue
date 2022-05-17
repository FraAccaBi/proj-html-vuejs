<template>
<div class="row text-light">
    <div class="get-edu col ps-4">
        <h5>Get Eduprime</h5>
        <ul class="list-unstyled">
            <li :getEdu="getEdu" v-for="element in getEdu" :key="element.id"> {{element.text}}</li>
        </ul>
    </div>
    <div class="networking col pe-4">
        <h5>Networking</h5>
        <ul class="list-unstyled">
            <li :networking="networking" v-for="element in networking" :key="element.id"> {{element.text}}</li>
        </ul>
    </div>

</div>
</template>

<script>
export default {
  name: 'FooterSection',
  props:{
    getEdu: Array,
    networking: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "~@/assets/scss/variables.scss";
@import "~@/assets/scss/style.scss";
li,h5{
  font-size: smaller;
}
li{
  line-height: 2rem;
}

</style>