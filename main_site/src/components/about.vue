<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="columns is-mobile is-centered">
          <div class="column has-text-centered">
            <h1 class="title is-1 has-text-primary">About Me</h1>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <p class="box aboutmeinfo has-text-dark">My name is Ethan Fox; I love learning about pretty much everything and bringing new ideas to life!

        To fuel this fire, I spend a lot of my days reading, listening to audiobooks/podcasts, and watching videos online. The topics covered mainly centre around technology, science,
        and geopolitics. Those are my primary interests, I've spent long days down Google/YouTube/Wikipedia holes looking up
        everything from cooking to classic Roman architecture!

        Outside of intellectual endeavours: I play way too many video games, travel as much as possible, and want to
        cuddle every dog I see.

        You can read my thoughts on all of these subjects and more on my <a href="/blog">blog</a>, tweet at <a href="https://twitter.com/sudofox" target="_blank">me</a> or feel free to reach out
        and email me at foxethan@gmail.com to talk.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'About'
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

<style lang="scss" scoped>
.container{
  padding-top: 5vh;
}
h4 {
  border-bottom: solid 4px #2196F3;
  display: inline;
  padding-bottom:4px;
  line-height: 200%;
}
.columns .title {
  color: #FFC107;
}
p {
  color: white;
  line-height: 200%;
  font-size: 1.5rem;
  padding: 1rem;
}
.aboutmeinfo {
  padding-top: 1vh;
  a {
  }
}
</style>
