---
title: Creating my new site 
date: 2018-03-21 21:27:13
type: post
blog: true
tags:
    - Dev
    - Webdev
    - Vue
---


# The start 

<HeaderImage :picture="`OldSite.jpg`" :description="`My old site`"/>

My old site was... a mess. The remnants can still be found [here](https://github.com/thesudofox/mysite) on GitHub.

High school had been a crazy time in my life; the portfolio I built was an exemplary display of that. I lacked the foresight at the time to sit down and truly understanding what I wanted out of my site.

With that lack of planning, I accidentally boxed myself into a corner. The technology stack I had chosen gave me a subpar local workflow that I didn't want to maintain, and [GitHub Pages](https://pages.github.com) was more limiting than what I was looking for. I wanted something **new**, something I could **grow** with.

# Where to go?

I knew I wanted to learn from my previous mistakes and incorporate my desire to start a blog. Beyond that, I was pretty open-minded on where I was going. With that I made a list of simple goals:

1. Build on a technology I'll want to maintain for a few years. 
2. Make the framework I build extensible.
3. Allow blogging from markdown files.
4. Be static and lightweight.

I find keeping simple, but pointed goals help me scope my (otherwise neverending) search through technologies. In this search I don't want to limit myself to tools I've used in the past, but I also don't want to avoid repetition if I have the right tool in my arsenal.

These goals are driven by my love and long-time use of [Django](https://djangoproject.com). The underlying tech is excellent ([Python](https://python.org) \o/ ), and it is incredibly extensible.

# Delving deep

With these goals in mind, I began browsing technologies that would best fit my needs.

## Hosting to serve static content

After working with [GitHub Pages](https://pages.github.com), as I mentioned at the start of this, I knew I wanted the more granular control of the site's underlying technologies. This is not to say GitHub Pages didn't provide a seamless experience, it works, but there was too much magic for me (for my own baby). I love Nginx, why not use it? Now... what provider?

I work for [DigitalOcean](https://digitalocean.com) as of writing this post so I want to get that potential perceived bias out of the way with this statement now.

After evaluating my options I came to the list of potential providers: [AWS](https://aws.amazon.com), [GCP](https://cloud.google.com), [DO](https://digitalocean.com), [Vultr](https://vultr.com), and [Linode](https://linode.com)
I weighed all the options on ease-of-use, costs, feature-set, and scalability. [DO](https://digitalocean.com) came out as the winner for a few reasons. Without breaking out a spreadsheet on you, 
the main driving factors against [AWS](https://aws.amazon.com) + [GCP](https://cloud.google.com) were the costs and [Linode](https://linode.com) + [Vultr](https://vultr.com) had
scale fighting against them. I don't need it now, but I may need it someday. 

## The content

Being able to build and display content flexibly was key. However, I didn't want to make compromises on my above goals. 

When I thought about goal 1, maintainability, I thought about what mattered to me most when having to open up a project to change or add something. 
After some deliberation, I had come to my conclusion, **tooling**. I didn't need all of the granular control [Gulp](https://gulpjs.com) was affording me for my small site:

```
import gulp from 'gulp'
import browserSync from 'browser-sync'

// These files all need to be maintained
//              ||
//              vv
import {testJs} from './gulp/test'
import {buildJs} from './gulp/build.javascript'
import {buildScss} from './gulp/build.scss'
import {buildStatic, cleanStaticDist} from './gulp/build.static'
import {serve} from './gulp/serve'

// Then you have to manually register all of your tasks
//              ||
//              vv
gulp.task('clean:static:dist', cleanStaticDist)
gulp.task('test:js', testJs)

gulp.task('build:js', ['test:js'], buildJs)
gulp.task('build:sass', buildScss)
gulp.task('build:static', ['clean:static:dist'], buildStatic)
gulp.task('build', ['build:js', 'build:sass', 'build:static'])

gulp.task('watch:js', ['build:js'], browserSync.reload)
gulp.task('serve', serve)

gulp.task('default', ['build', 'serve'])
```

It often felt like I was building the wheel myself or scraping together a [Gulp](https://gulpjs.com) idea from miscellaneous examples. I didn't need or want this level of granular control; I wanted something simpler for my personal site. I wanted an **ecosystem that was working for me**.

I looked at a few front-end technologies to fit this build, in the endi, it came to a choice between [ReactJS](https://reactjs.org) utilizing [GatsbyJS](https://gatsbyjs.org) vs. [VueJS](https://vuejs.org) utilizing [Nuxtent](https://nuxtent.now.sh) on top of [Nuxt](https://nuxtjs.org).


I built out an MVP with [Gatsby](https://gatsbyjs.org) and then [Nuxtent](https://nuxtent.now.sh). I decided to go with [Nuxtent](https://nuxtent.now.sh), [Nuxt](https://nuxtjs.org), and [VueJS](https://vuejs.org) for a few reasons:

1. [VueJS](https://vuejs.org) is simple to maintain because it's built with vanilla HTML, CSS, and JS by default.
2. The scalable ecosystem of Vue fits perfectly into my extensibility requirement. Do I need more than the above vanilla building blocks? The ecosystem has got my back. I can bring in Vuex for store management or build out templates with JSX.
3. [Nuxt](https://nuxtjs.org) and [Nuxtent](https://nuxtent.now.sh) felt less magical than Gatsby.
4. Vue-cli backed by [Vue-loader](https://vue-loader.vuejs.org) is awesome and good tooling leads to happy projects

## The future

Back a few months ago I was working with [Gatsby](Gatsby) just to test out the technology and thought it was awesome. 
I came back a few months later and had run into breaking changes when they had moved to a 1.0 release. 
For the platform, this was fantastic. For me, due to the extensive boilerplate I had written, the upgrade was a sloth. 
It felt like the entire reason I had gone with the platform, the ease of use, was now working
against me.

Looking at where [Nuxt](https://nuxtjs.org) is when writing this (post 1.0 release) and [Nuxtent](https://nuxtent.now.sh) is (moving into supporting [Nuxt](https://nuxtjs.org) 1.0) I hope this won't happen to [Nuxtent](https://nuxtent.now.sh). I'll be doing my best to make sure it doesn't through OSS contributions
to that as well as many other libraries in my stack.

There is also a ton to be improved on the site itself. Soon to come is a portfolio, improved 404 and 500 errors, as well as a few other touch-up things. :)
