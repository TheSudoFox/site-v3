<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          <img src="./assets/mylogo.png" alt="" width="21" height="30" max-height="250">
        </router-link>

        <div class="navbar-burger burger" @click="toggleMenu" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="navbar-menu">
          <!-- navbar start, navbar end -->
        </div>

      </div>

      <div id="navMenu" :class="{'is-active': this.$store.state.toggleMenu}" class="navbar-menu">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/skills">
            Skills
          </router-link>
          <router-link class="navbar-item" to="/about">
            About me
          </router-link>
          <router-link class="navbar-item" to="/work">
            Work
          </router-link>
          <a href="http://blog.ethanfox.me" class="navbar-item">
            Blog
          </a>
        </div>
      </div>

    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
  name: 'app',
  components: {
  },
  methods: {
    ...mapMutations([
    'toggleMenu',
    ]),
    toggleMenu (){
      this.$store.commit('toggleMenu', !this.$store.state.toggleMenu)
    }
  }
}
</script>

<!-- App specific CSS -->
<style lang="scss">
// Fonts
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700');

// Import Bulma's core
@import "~bulma/sass/utilities/_all";

$family-sans-serif: "Roboto", sans-serif;

// Set colors
$lightblue: #ecf5fe;
$primary: #2196F3;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);
$card-background-color: #FFAB91;
$card-header-color: blue;
$card-footer-border-top: 0px solid blue;
$card-shadow: 0 4px 4px rgba($black, 0.1), 0 0 0 1px rgba($black, 0.1);
$tabs-boxed-link-active-background-color: #F44336;
$tabs-boxed-link-border-color: #F44336;
$tabs-link-active-color: $white;
$tabs-link-color: #4a4a4a;

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
"white": ($white, $black),
"black": ($black, $white),
"light": ($light, $light-invert),
"dark": ($dark, $dark-invert),
"primary": ($primary, $primary-invert),
"info": ($info, $info-invert),
"success": ($success, $success-invert),
"warning": ($warning, $warning-invert),
"danger": ($danger, $danger-invert),
"twitter": ($twitter, $twitter-invert),
);

// Links
$link: hsl(217, 71%, 33%);
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

// App specific CSS
body {
  width: 100%;
  height: 100vh;
  font-size: 125%;
//  background-color: #f7faff;
}

#app {
//  background-color: #f7faff;
}

.blog-container h1{ 
  color: $primary;
  font-size: 200%;
  font-weight: 600;
}

.blog-container h1{ 
  color: $primary;
  font-size: 200%;
  font-weight: 600;
}

.blog-container h1{ 
  color: $primary;
  font-size: 200%;
  font-weight: 600;
}

.blog-container h2{ 
  color: #FF6F00;
  font-size: 125%;
  font-weight: 600;
}

.blog-container h4 {
  border-bottom: solid 4px green;
  display: inline;
  padding-bottom: 4px;
  line-height: 200%;
}

.blog-container p {
  margin: 1rem 0 1rem 0;
  line-height: 1.5;
}

u {
  text-decoration-color: $primary;
}

ol {
  margin-left: 2.5rem;
  margin-bottom: 1.5rem;
}

.box {
  box-shadow: none;
}

.ecolor {
  color: #1565c0;
}

.fcolor {
  color: #42a5f5;
}
</style>
