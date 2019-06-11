<template>
  <div class="header-image">
    <img style="max-height: 250px;" :src="`/${picture}`"></img>
    <h5 class="is-subtitle is-5">{{description}}</h5>
  </div>
</template>
<script>
export default {
  props: ['picture', 'description']
}
</script>
<style>
.header-image{
  margin: 2rem 0 2.5rem 0 auto;
  display: block;
  text-align: center;
}
</style>
