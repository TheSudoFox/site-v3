<template>
  <div class="has-text-centered project-image">
    <img style="max-height: 250px;" :src="`${picture}`"></img>
  </div>
</template>
<script>
export default {
  props: ['picture', 'description']
}
</script>
<style>
.header-image{
  margin: 5rem 0 2.5rem 0;
}
.project-image{
  display: inline-block;
  padding: 0.5rem;
}
</style>
