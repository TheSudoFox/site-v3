<template id="index" class="index">
<section class="hero">
  <div class="container">

    <div class="columns is-mobile is-centered">
        <img src="../assets/logo.png" style="max-height: 200px; max-width: 200px;">
    </div>

    <div class="columns is-mobile is-centered">
      <div class="column has-text-centered">
        <h1 class="is-size-1"><span class="ecolor">E</span>than <span class="fcolor">F</span>ox</h1>
        <h3 class="">entrepreneur, developer, sysadmin</h3>
      </div>
    </div>
  </div>
</section>
</template>
<style lang="scss" scoped>
.container{
  padding-top: 15vh;
}
.fcolor {
  color: #42A5F5;
}
.ecolor {
  color: #1565C0;
}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
opacity: 0;
}
.subt2 {
  margin: 0;
  padding: 0;
}
</style>
