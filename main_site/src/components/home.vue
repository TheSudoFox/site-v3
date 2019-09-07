<template>
  <div>
    <div class="columns is-mobile is-centered">
      <div class="column has-text-centered">
        <img src="../assets/logo.png" alt="" max-height="350" class="is-centered mainLogo"/>
        <h1 class="title is-1">
          <span class="ecolor">E</span>than <span class="fcolor">F</span>ox
        </h1>
        <h3 class="subtitle">entrepreneur, developer, actively learning
        </h3>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      title: 'Landing'
    }
  },
  // Usage with context the component
  head: {
    // To use "this" in the component, it is necessary to return the object through a function
    title: function () {
      return {
        inner: this.title
      }
    },
    meta: [
      { name: 'description', content: 'The homebase for all my thoughts', id: 'desc' }
    ]
  }
}
</script>
<style>
.mainLogo{
  max-height: 300px;
}
</style>
