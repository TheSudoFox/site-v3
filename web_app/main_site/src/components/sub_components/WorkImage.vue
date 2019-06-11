<template>
  <div class="has-text-centered project-image">
    <a :href="`http://ethanfox.me/img/projects/${picture}`">
      <img style="max-height: 300px;" :src="`/img/projects/${picture}`"></img>
    </a>
    <p class="is-size-7">{{description}}</p>
    <p class="is-size-7"><a :href="`http://ethanfox.me/img/projects/${picture}`">Image link</a></p>
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
