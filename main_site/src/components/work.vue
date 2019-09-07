<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="has-text-centered">
          <h1 class="title is-1 has-text-primary">My Work</h1>
        </div>
        <div class="columns is-mobile has-text-centered">
          <div class="column" style="padding-top: 2rem;">
            <a target="_blank" href="https://github.com/thesudofox"><button class="button has-background-light has-text-dark">GitHub</button></a>
            <a target="_blank" href="https://f002.backblazeb2.com/file/ethanfox-site/EthanFoxResume.pdf"><button class="button has-background-light has-text-dark" style="margin: 0 1rem 0 1rem;">Resume</button></a>
            <a target="_blank" href="https://www.linkedin.com/in/ethan-fox-5093a293/"><button class="button has-background-light has-text-dark">LinkedIn</button></a>
          </div>
        </div>
      </div>
    </section>
    <section class="section">


      <div style="padding: 2rem;" class="container box">
        <h1 class="is-3 title has-text-primary">Assistagrow</h1>
        <h1 class="is-5 sub-title"><b>Title:</b> Co-Founder, Chief Product Officer</h1>
        <h1 class="is-5 sub-title"><b>Responsibilities:</b> Lead multiple product teams to produce an indoor agriculture automation solution. Lead design efforts for all products as well as helped in architecting/developing solutions. Worked to found the business and make day-to-day decisions. Filled any gaps that needed to be filled in the company, development or otherwise!</h1>
        <section class="section">
          <div class="columns is-mobile is-centered">
            <div class="column is-one-third">
              <WorkImage picture="ag1.png" description="Homepage design concept"></WorkImage>
            </div>
            <div class="column is-one-third">
              <WorkImage picture="ag2.png" description="Homepage design concept page 2"></WorkImage>
            </div>
            <div class="column is-one-third">
              <WorkImage picture="desktop-hd-boxgraph.png" description="Monitoring graph/dashboard design concept"></WorkImage>
            </div>
          </div>
        </section>
      </div>
    </section>
    <section class="section">
      <div style="padding: 2rem;" class="container box">
        <h1 class="is-3 title has-text-primary">UniversityRecruitMe</h1>
        <h1 class="is-5 sub-title"><b>Title:</b> Co-Founder, Chief Technology Officer</h1>
        <h1 class="is-5 sub-title"><b>Responsibilities:</b> To develop the web application and help achieve product-market fit. Work with team to coordinate architectural decisions and development across the organization. Fill any development gaps that needed to be filled.</h1>
        <a href="https://vimeo.com/158288274">UniversityRecruitMe Video</a>
      </div>
    </section>
  </div>
</template>
<script>
import WorkImage from './sub_components/WorkImage.vue'
export default {
  name: 'Work',
  components: {
    WorkImage
  },
  data () {
    return {
      title: 'Work'
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
.workinfo{
  padding-top: 15vh;
}
button {
  border: none;
}
</style>
